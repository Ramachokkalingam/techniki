import Hero from '@/components/sections/Hero';
import CertificateVerification from '@/components/sections/CertificateVerification';

export default function CertificatesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Event "
        titleGradient="Certificates"
        subtitle="Verify Your Achievements"
        description="Download and verify certificates for events and workshops you've attended with Techniki."
        primaryButton={{
          text: 'Verify Certificate',
          href: '#verify',
          icon: 'search',
        }}
        secondaryButton={{
          text: 'View Events',
          href: '/events',
          icon: 'calendar',
        }}
      />

      {/* Certificate Verification Section */}
      <CertificateVerification />

      {/* Info Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="text-6xl mb-6 text-blue-400">
              <i className="fas fa-info-circle"></i>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Certificate Verification
            </h3>
            <div className="text-lg text-gray-300 space-y-4 text-left md:text-center">
              <p>
                <i className="fas fa-check-circle text-green-400 mr-2"></i>
                All certificates include a unique QR code for instant verification
              </p>
              <p>
                <i className="fas fa-shield-alt text-blue-400 mr-2"></i>
                Certificates are digitally verified and tamper-proof
              </p>
              <p>
                <i className="fas fa-download text-purple-400 mr-2"></i>
                Download high-quality certificates ready for printing
              </p>
              <p>
                <i className="fas fa-mobile-alt text-green-400 mr-2"></i>
                Scan the QR code with any smartphone to verify authenticity
              </p>
            </div>
            <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-gray-300">
                <i className="fas fa-envelope mr-2 text-blue-400"></i>
                For any queries regarding certificates, contact us at{' '}
                <a
                  href="mailto:techniki@ggn.amity.edu"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  techniki@ggn.amity.edu
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
