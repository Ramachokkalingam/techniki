'use client';

import QRCode from 'qrcode';

export interface CertificateTemplate {
  name: string;
  certificateId: string;
  templatePath?: string;
  teamName?: string;
}

export async function generateQRCode(certificateId: string): Promise<string> {
  try {
    const verificationUrl = `${window.location.origin}/certificates/verify/${certificateId}`;
    const qrCodeDataUrl = await QRCode.toDataURL(verificationUrl, {
      width: 300,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return '';
  }
}

export async function generateCertificateWithOverlay(data: CertificateTemplate): Promise<void> {
  try {
    // Generate QR code
    const qrCode = await generateQRCode(data.certificateId);
    
    // Use provided template path or default
    const templatePath = data.templatePath || '/assets/images/templates/ctrl_think.jpg';
    
    // Open certificate in new window with overlays
    const certificateWindow = window.open('', '_blank', 'width=1200,height=800');
    if (!certificateWindow) {
      alert('Please allow popups to download your certificate');
      return;
    }

    certificateWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Certificate - ${data.name}</title>
        <style>
          @page { 
            size: landscape; 
            margin: 0; 
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body { 
            margin: 0;
            padding: 0;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            font-family: Arial, sans-serif;
          }
          .certificate-container {
            position: relative;
            width: 100%;
            max-width: 1200px;
            background: white;
          }
          .certificate-bg {
            width: 100%;
            height: auto;
            display: block;
          }
          .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
          }
          .participant-name {
            position: absolute;
            top: 51%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 48px;
            font-weight: bold;
            color: #000;
            text-align: center;
            width: 70%;
            font-family: 'Georgia', serif;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          .qr-code {
            position: absolute;
            bottom: 8%;
            right: 5%;
            width: 120px;
            height: 120px;
            background: white;
            padding: 5px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          }
          .qr-code img {
            width: 100%;
            height: 100%;
          }
          .download-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            transition: transform 0.2s;
          }
          .download-btn:hover {
            transform: scale(1.05);
          }
          .download-btn:active {
            transform: scale(0.95);
          }
          @media print {
            body {
              background: white;
            }
            .download-btn {
              display: none;
            }
            .certificate-container {
              max-width: 100%;
            }
          }
        </style>
      </head>
      <body>
        <div class="certificate-container">
          <!-- Background Template Image -->
          <img 
            src="${templatePath}" 
            alt="Certificate Template" 
            class="certificate-bg"
            crossorigin="anonymous"
          />
          
          <!-- Overlay Elements -->
          <div class="overlay">
            <!-- Participant Name -->
            <div class="participant-name">${data.name}</div>
            
            <!-- QR Code -->
            <div class="qr-code">
              <img src="${qrCode}" alt="QR Code" />
            </div>
          </div>
        </div>
        
        <button class="download-btn" onclick="window.print()">
          📥 Download Certificate
        </button>
        
        <script>
          // Optional: Auto-focus for printing
          window.onload = () => {
            console.log('Certificate loaded for: ${data.name}');
          };
        </script>
      </body>
      </html>
    `);
    
    certificateWindow.document.close();
  } catch (error) {
    console.error('Error generating certificate:', error);
    alert('Error generating certificate. Please try again.');
  }
}
