'use client';

import QRCode from 'qrcode';

export interface CertificateTemplate {
  name: string;
  certificateId: string;
  templatePath?: string;
  teamName?: string;
  eventId?: string;
}

// Template-specific positioning (pixel coords for a 1200x800 canvas)
interface TemplatePosition {
  name: { x: number; y: number; fontSize: number; color: string; fontFamily: string; align: 'center' | 'left' };
  qrCode: { x: number; y: number; size: number };
}

const POSITIONS: Record<string, TemplatePosition> = {
  'ctrl-think-2025': {
    name:   { x: 600, y: 450, fontSize: 48, color: '#000000', fontFamily: 'Georgia, serif', align: 'center' },
    qrCode: { x: 900, y: 600, size: 120 },
  },
  'cyber-security-2025': {
    name:   { x: 600, y: 420, fontSize: 48, color: '#ffffff', fontFamily: 'Georgia, serif', align: 'center' },
    qrCode: { x: 900, y: 600, size: 120 },
  },
'cv-workshop-2026': {
  name: { 
    x: 780, 
    y: 330,   // ✅ FIXED (pehle 130 tha)
    fontSize: 42, 
    color: '#ffffff', 
    fontFamily: "'Playfair Display', Georgia, serif", 
    align: 'center' 
  },
  qrCode: { x: 1050, y: 580, size: 80 },
},
};

const DEFAULT_POSITION: TemplatePosition = POSITIONS['ctrl-think-2025'];

export async function generateQRCode(certificateId: string): Promise<string> {
  try {
    const verificationUrl = `${window.location.origin}/certificates/verify/${certificateId}`;
    const qrCodeDataUrl = await QRCode.toDataURL(verificationUrl, {
      width: 300,
      margin: 1,
      color: { dark: '#000000', light: '#FFFFFF' },
    });
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return '';
  }
}

export async function generateCertificateWithOverlay(data: CertificateTemplate): Promise<void> {
  try {
    const qrCode = await generateQRCode(data.certificateId);
    const templatePath = data.templatePath || '/assets/images/templates/ctrl_think.jpg';

    // Resolve positions from eventId, falling back to template-path heuristic
    let pos: TemplatePosition;
    if (data.eventId && POSITIONS[data.eventId]) {
      pos = POSITIONS[data.eventId];
    } else if (templatePath.includes('cyber_security')) {
      pos = POSITIONS['cyber-security-2025'];
    } else if (templatePath.includes('CVworkshop') || templatePath.includes('cv-workshop')) {
      pos = POSITIONS['cv-workshop-2026'];
    } else {
      pos = DEFAULT_POSITION;
    }

    const { name: namePos, qrCode: qrPos } = pos;

    // QR code: x,y is top-left corner of the QR box
    // Name: x is the horizontal anchor (centre for align:'center'), y is top of text

    // CSS values as percentages of the 1200×800 template
    const nameCssLeft   = (namePos.x / 1200) * 100;
    const nameCssTop    = (namePos.y / 800)  * 100;
    const qrCssLeft     = (qrPos.x  / 1200) * 100;
    const qrCssTop      = (qrPos.y  / 800)  * 100;
    const qrSizePct     = (qrPos.size / 1200) * 100;

    const certificateWindow = window.open('', '_blank', 'width=1260,height=860');
    if (!certificateWindow) {
      alert('Please allow popups to download your certificate');
      return;
    }

    certificateWindow.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Certificate - ${data.name}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet"/>
  <style>
    @page { size: 1200px 800px landscape; margin: 0; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #111;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    /* Fixed-size wrapper so percentage coords map 1-to-1 with template pixels */
    .cert-wrap {
      position: relative;
      width: 1200px;
      height: 800px;
      flex-shrink: 0;
    }
    .cert-wrap img.bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: fill;
      display: block;
    }
    .participant-name {
      position: absolute;
      left: ${nameCssLeft}%;
      top: ${nameCssTop}%;
      transform: ${namePos.align === 'center' ? 'translateX(-50%)' : 'none'};
      font-size: ${namePos.fontSize}px;
      font-weight: bold;
      color: ${namePos.color};
      font-family: ${namePos.fontFamily};
      white-space: nowrap;
      letter-spacing: 2px;
      text-shadow: 0 2px 8px rgba(0,0,0,0.6);
      pointer-events: none;
    }
    .qr-box {
      position: absolute;
      left: ${qrCssLeft}%;
      top: ${qrCssTop}%;
      width: ${qrPos.size}px;
      height: ${qrPos.size}px;
      background: #fff;
      padding: 4px;
      border-radius: 6px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.35);
      pointer-events: none;
    }
    .qr-box img { width: 100%; height: 100%; display: block; }
    .download-btn {
      position: fixed;
      bottom: 28px;
      right: 28px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #fff;
      padding: 14px 28px;
      border: none;
      border-radius: 50px;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      z-index: 9999;
      transition: transform .2s;
    }
    .download-btn:hover { transform: scale(1.06); }
    @media print {
      body { background: white; min-height: unset; }
      .download-btn { display: none; }
    }
  </style>
</head>
<body>
  <div class="cert-wrap">
    <img class="bg" src="${templatePath}" alt="Certificate" crossorigin="anonymous"/>
    <div class="participant-name">${data.name}</div>
    <div class="qr-box"><img src="${qrCode}" alt="QR Code"/></div>
  </div>
  <button class="download-btn" onclick="window.print()">&#x1F4E5; Download Certificate</button>
  <script>
    window.onload = () => { console.log('Certificate ready for: ${data.name}'); };
  </script>
</body>
</html>`);

    certificateWindow.document.close();
  } catch (error) {
    console.error('Error generating certificate:', error);
    alert('Error generating certificate. Please try again.');
  }
}
