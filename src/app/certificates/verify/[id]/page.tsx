import { notFound } from 'next/navigation';
import { findCertificate } from '@/lib/certificates/certificateManager';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CertificateVerifyPage({ params }: PageProps) {
  const { id } = await params;
  const result = findCertificate({ certificateId: id });

  if (!result.success || !result.certificate) {
    notFound();
  }

  const certificate = result.certificate;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-500/20 rounded-full p-6 mb-6">
            <i className="fas fa-check-circle text-6xl text-green-400"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificate Verified ✓
          </h1>
          <p className="text-xl text-gray-300">
            This is an authentic certificate issued by Techniki
          </p>
        </div>

        {/* Certificate Details Card */}
        <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-certificate text-2xl text-blue-400"></i>
                <h3 className="text-lg font-semibold text-white">Certificate ID</h3>
              </div>
              <p className="text-2xl font-bold text-blue-300">{certificate.certificateId}</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-user text-2xl text-purple-400"></i>
                <h3 className="text-lg font-semibold text-white">Participant Name</h3>
              </div>
              <p className="text-2xl font-bold text-purple-300">{certificate.name}</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-users text-2xl text-green-400"></i>
                <h3 className="text-lg font-semibold text-white">Team Name</h3>
              </div>
              <p className="text-xl font-semibold text-green-300">{certificate.teamName}</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-id-card text-2xl text-yellow-400"></i>
                <h3 className="text-lg font-semibold text-white">Enrollment Number</h3>
              </div>
              <p className="text-xl font-semibold text-yellow-300">{certificate.enrollment}</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-envelope text-2xl text-pink-400"></i>
                <h3 className="text-lg font-semibold text-white">Email</h3>
              </div>
              <p className="text-lg text-pink-300 break-all">{certificate.email}</p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-calendar text-2xl text-orange-400"></i>
                <h3 className="text-lg font-semibold text-white">Event Date</h3>
              </div>
              <p className="text-lg text-orange-300">{certificate.eventDate}</p>
            </div>
          </div>

          {/* Event Information */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <i className="fas fa-trophy text-3xl text-yellow-400"></i>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Event Information</h2>
              </div>
              <p className="text-xl text-blue-300 font-semibold mb-2">{certificate.eventName}</p>
              <p className="text-gray-400">Category: {certificate.category}</p>
              <p className="text-gray-400">Issued on: {certificate.issueDate}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/certificates"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl"
          >
            <i className="fas fa-download"></i>
            Download Certificate
          </Link>
          <Link
            href="/events/ctrl-think"
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
          >
            <i className="fas fa-image"></i>
            View Event Photos
          </Link>
        </div>

        {/* Security Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
            <i className="fas fa-shield-alt text-green-400"></i>
            <p className="text-green-300 font-semibold">
              This certificate has been digitally verified and is authentic
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400">
          <p className="mb-2">
            <i className="fas fa-info-circle mr-2"></i>
            Issued by Techniki - Amity University Gurugram
          </p>
          <p className="text-sm">
            For queries, contact:{' '}
            <a href="mailto:techniki@ggn.amity.edu" className="text-blue-400 hover:text-blue-300">
              techniki@ggn.amity.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const result = findCertificate({ certificateId: id });

  if (!result.success || !result.certificate) {
    return {
      title: 'Certificate Not Found',
    };
  }

  return {
    title: `Certificate Verified - ${result.certificate.name}`,
    description: `Verified certificate for ${result.certificate.name} - ${result.certificate.eventName}`,
  };
}
