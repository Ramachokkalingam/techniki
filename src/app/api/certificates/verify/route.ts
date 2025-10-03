import { NextRequest, NextResponse } from 'next/server';
import { findCertificate } from '@/lib/certificates/certificateManager';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const certificateId = searchParams.get('certificateId');
  const enrollment = searchParams.get('enrollment');
  const email = searchParams.get('email');
  const name = searchParams.get('name');
  const eventId = searchParams.get('eventId');

  if (!certificateId && !enrollment && !email && !name) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Please provide at least one search criteria (Certificate ID, Enrollment, Email, or Name)' 
      },
      { status: 400 }
    );
  }

  const result = findCertificate({
    certificateId: certificateId || undefined,
    enrollment: enrollment || undefined,
    email: email || undefined,
    name: name || undefined,
    eventId: eventId || undefined,
  });

  if (result.success && result.certificate) {
    return NextResponse.json({
      success: true,
      message: 'Certificate verified successfully',
      certificate: result.certificate
    });
  }

  return NextResponse.json(
    { success: false, error: result.error || 'Certificate not found. Please check your details.' },
    { status: 404 }
  );
}
