'use client';

import Link from 'next/link';

export default function CTF25OctPage() {
  const handleShare = async (platform: string) => {
    const caption = '🎉 I just solved the Techniki Diwali CTF Challenge! 🏆🪔\n\nHappy Diwali from @techniki_auh!\n\n#TechnikiCTF #Diwali2025 #CTFChallenge #CyberSecurity';
    
    try {
      // Check if Web Share API is available
      if (!navigator.share) {
        throw new Error('Web Share API not supported');
      }

      const response = await fetch('/assets/images/events/ctf25oct.png');
      const blob = await response.blob();
      const file = new File([blob], 'techniki-ctf-winner.png', { type: 'image/png' });
      
      const shareData = {
        text: caption,
        files: [file]
      };
      
      // Try to share with files
      if (navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        return; // Success!
      } else {
        // Fallback: share without files (text only)
        await navigator.share({ text: caption });
        alert('✅ Caption shared!\n\n📱 Please long-press the image below and share it separately.');
        return;
      }
    } catch (err) {
      console.error('Share failed:', err);
      
      // Fallback: Copy to clipboard
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(caption);
          alert(`✅ Caption copied to clipboard!\n\n📱 Please:\n1. Long-press the image below\n2. Select "Share"\n3. Choose ${platform}\n4. Paste the caption`);
        } else {
          // Ultimate fallback: Show caption in alert
          alert(`📋 Copy this caption:\n\n${caption}\n\nThen long-press the image below to share on ${platform}`);
        }
      } catch (clipboardErr) {
        console.error('Clipboard failed:', clipboardErr);
        alert(`📋 Copy this caption:\n\n${caption}\n\nThen long-press the image below to share on ${platform}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Fireworks Animation Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-80 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Hero Section with Diwali Theme */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-20 bg-gradient-to-br from-orange-900/40 via-purple-900/40 to-pink-900/40">
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Diya decorations */}
        <div className="absolute top-10 left-10 text-6xl animate-pulse">🪔</div>
        <div className="absolute top-10 right-10 text-6xl animate-pulse" style={{ animationDelay: '0.5s' }}>🪔</div>
        <div className="absolute bottom-10 left-20 text-6xl animate-pulse" style={{ animationDelay: '1s' }}>🪔</div>
        <div className="absolute bottom-10 right-20 text-6xl animate-pulse" style={{ animationDelay: '1.5s' }}>🪔</div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div data-aos="zoom-in">
            {/* Trophy and celebration */}
            <div className="text-9xl mb-6 animate-bounce">
              🏆
            </div>

            {/* Main Congratulations */}
            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent leading-tight animate-pulse">
              CONGRATULATIONS!
            </h1>

            {/* Success message */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="glass-card p-8 rounded-3xl border-4 border-yellow-400 shadow-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                <div className="text-5xl mb-4">🎉 🎊 ✨</div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  You Found the Flag!
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-4">
                  You&apos;ve successfully completed the{' '}
                  <span className="text-yellow-400 font-bold">Diwali CTF Challenge</span>!
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Happy Diwali from Team Techनिकी! 🎇
                </p>
                
                {/* Flag Display */}
                <div className="bg-black/50 border-2 border-dashed border-green-400 rounded-xl p-6 mb-6">
                  <p className="text-sm text-green-400 mb-2 font-mono">FLAG CAPTURED:</p>
                  <p className="text-2xl md:text-3xl font-mono text-green-300 break-all">
                    www.techniki.club/events/ctf25oct
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center text-4xl mb-4">
                  <span className="animate-bounce">🎆</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🎇</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎉</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🪔</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>🎊</span>
                </div>
              </div>
            </div>

            {/* Shoutout message */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="glass-card p-8 rounded-2xl bg-purple-900/30 border-2 border-purple-400">
                <div className="text-5xl mb-4">📢</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Get Your Shoutout & Goodies!
                </h3>
                <p className="text-lg text-gray-200 mb-6">
                  As a winner, you&apos;re eligible for exclusive shoutouts and awesome goodies from Techनिकी! 🎁
                </p>
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-white font-semibold mb-2">🎯 What&apos;s Next?</p>
                    <ul className="text-left text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Take a screenshot of this page</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Join our WhatsApp group for winners</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Share your achievement on social media</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Tag @techniki_auh to get featured!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Stats Section */}
      <section className="py-20 bg-gray-900/80 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Challenge Stats
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8 rounded-2xl text-center border-2 border-yellow-400/50">
              <div className="text-6xl mb-4">🔍</div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">CTF</div>
              <p className="text-gray-300 text-lg">Capture The Flag</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center border-2 border-orange-400/50">
              <div className="text-6xl mb-4">🪔</div>
              <div className="text-5xl font-bold text-orange-400 mb-2">Diwali</div>
              <p className="text-gray-300 text-lg">Special Edition</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center border-2 border-pink-400/50">
              <div className="text-6xl mb-4">🏅</div>
              <div className="text-5xl font-bold text-pink-400 mb-2">Winner</div>
              <p className="text-gray-300 text-lg">You Made It!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Badges */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Your Achievements
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl border-l-4 border-green-400">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🔐</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Flag Hunter</h3>
                    <p className="text-gray-300">Successfully decoded the hidden message and found the flag</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl border-l-4 border-blue-400">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🧩</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Puzzle Master</h3>
                    <p className="text-gray-300">Solved the Diwali CTF challenge with skills and determination</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl border-l-4 border-purple-400">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">⚡</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quick Thinker</h3>
                    <p className="text-gray-300">Demonstrated excellent problem-solving abilities</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl border-l-4 border-yellow-400">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">🎯</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">CTF Champion</h3>
                    <p className="text-gray-300">Joined the elite group of Techniki CTF winners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diwali Wishes Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/30 via-yellow-900/30 to-pink-900/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-7xl mb-6">🪔✨🎆</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Happy Diwali 2025!
            </h2>
            <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border-2 border-yellow-400">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                May this festival of lights illuminate your path to success and fill your life with joy, 
                prosperity, and endless opportunities. Thank you for being a valued member of the Techनिकी 
                community!
              </p>
              <p className="text-2xl font-bold text-yellow-300">
                शुभ दीपावली! 🪔
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Sharing Section */}
      <section className="py-20 bg-gray-900/80 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Share Your Victory! 🎉
            </h2>
            
            {/* One-Click Share Buttons */}
            <div className="glass-card p-8 rounded-2xl mb-8 border-4 border-yellow-400">
              <div className="text-7xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold text-white mb-4">One-Click Share</h3>
              <p className="text-gray-300 mb-6">
                Click any button to share your achievement with image + caption!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {/* WhatsApp Share */}
                <button
                  onClick={() => handleShare('WhatsApp')}
                  className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3 justify-center"
                >
                  <i className="fab fa-whatsapp text-2xl"></i> WhatsApp
                </button>

                {/* Instagram Share */}
                <button
                  onClick={() => handleShare('Instagram')}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3 justify-center"
                >
                  <i className="fab fa-instagram text-2xl"></i> Instagram
                </button>

                {/* Twitter Share */}
                <button
                  onClick={() => handleShare('Twitter/X')}
                  className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3 justify-center"
                >
                  <i className="fab fa-twitter text-2xl"></i> Twitter
                </button>

                {/* LinkedIn Share */}
                <button
                  onClick={() => handleShare('LinkedIn')}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3 justify-center"
                >
                  <i className="fab fa-linkedin text-2xl"></i> LinkedIn
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                📱 <strong>Mobile:</strong> Image + caption will share directly to your chosen app!<br/>
                💻 <strong>Desktop:</strong> Caption copied - use manual sharing below
              </p>
            </div>

            {/* Fallback: Manual Image Share */}
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Manual Share (if needed)</h3>
              <p className="text-gray-300 mb-6">
                Long-press (mobile) or right-click (desktop) the image below
              </p>
              
              {/* Display the actual image for sharing */}
              <div className="mb-6 bg-black/30 p-4 rounded-xl">
                <img 
                  src="/assets/images/events/ctf25oct.png" 
                  alt="Techniki CTF Winner"
                  className="max-w-full h-auto rounded-lg shadow-2xl mx-auto cursor-pointer"
                  style={{ maxHeight: '400px' }}
                />
                <p className="text-sm text-gray-400 mt-4">
                  📱 <strong>Mobile:</strong> Long-press → Share<br/>
                  💻 <strong>Desktop:</strong> Right-click → Copy/Save Image
                </p>
              </div>
              
              {/* Caption to copy */}
              <div className="bg-black/50 border-2 border-dashed border-purple-400 rounded-xl p-6 text-left">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm text-purple-400 font-semibold">CAPTION:</p>
                  <button
                    onClick={async () => {
                      const caption = '🎉 I just solved the Techniki Diwali CTF Challenge! 🏆🪔\n\nHappy Diwali from @techniki_auh!\n\n#TechnikiCTF #Diwali2025 #CTFChallenge #CyberSecurity';
                      await navigator.clipboard.writeText(caption);
                      alert('✅ Caption copied to clipboard!');
                    }}
                    className="text-xs bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded transition-all"
                  >
                    <i className="fas fa-copy mr-1"></i> Copy
                  </button>
                </div>
                <p className="text-white whitespace-pre-line">
                  🎉 I just solved the Techniki Diwali CTF Challenge! 🏆🪔
                  {'\n\n'}Happy Diwali from @techniki_auh!
                  {'\n\n'}#TechnikiCTF #Diwali2025 #CTFChallenge #CyberSecurity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-orange-900/40 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Connected with Techनिकी
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don&apos;t miss out on future challenges, events, and exciting opportunities!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl"
              >
                Join Community <i className="fas fa-user-plus ml-2"></i>
              </Link>
              <Link
                href="/events"
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl"
              >
                View All Events <i className="fas fa-calendar ml-2"></i>
              </Link>
              <Link
                href="/"
                className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all"
              >
                Back to Home <i className="fas fa-home ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-800 bg-gray-900 relative z-10">
        <p className="mb-2">🪔 Happy Diwali from Team Techनिकी 🪔</p>
        <p>© {new Date().getFullYear()} Techनिकी. All rights reserved.</p>
      </footer>
    </div>
  );
}
