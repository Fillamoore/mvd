// app/api/auth/otp/request/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendOTPEmail } from '@/lib/email-service';

const globalAny = global as unknown as { 
  otpStore?: Map<string, { code: string; expiresAt: number; attempts: number }> 
};
if (!globalAny.otpStore) {
  console.log('🆕 Creating new otpStore in request route');
  globalAny.otpStore = new Map();
}
const otpStore = globalAny.otpStore;

export async function POST(request: NextRequest) {
  try {
    const { email }: { email: string } = await request.json();
    console.log('📧 OTP request for:', email);

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Check if user exists and is allowed
    try {
      const result = await db.query(
        `SELECT user_type FROM users WHERE email = $1`,
        [email.toLowerCase()]
      );
      
      if (result.rows.length === 0) {
        console.log('❌ Email not found:', email);
        return NextResponse.json({ error: 'Access not allowed for this email' }, { status: 403 });
      }

    } catch (dbError) {
      console.error('❌ Database error:', dbError);
      return NextResponse.json({ 
        error: 'Currently offline. Try again when online.' 
      }, { status: 503 });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    // Store OTP
    otpStore.set(email.toLowerCase(), {
      code: otp,
      expiresAt,
      attempts: 0
    });

    console.log('🔐 Generated OTP for:', email);
    console.log('📊 Current OTP store size:', otpStore.size);

    // Send email
    try {
      await sendOTPEmail(email, otp);
      console.log('✅ Email sent to:', email);
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError);
      // Don't fail the request if email fails, but log it
    }

    return NextResponse.json({
      success: true,
      message: 'Verification code sent to your email'
    });

  } catch (error) {
    console.error('❌ OTP request error:', error);
    return NextResponse.json({ 
      error: 'Internal server error. Please try again.' 
    }, { status: 500 });
  }
}