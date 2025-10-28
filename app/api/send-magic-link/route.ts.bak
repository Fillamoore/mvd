// app/api/send-magic-link/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function generateRandomToken(length: number = 16): string {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    // Web Crypto API (browser)
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  } else {
    // Node.js crypto (server)
    const { randomBytes } = require('crypto');
    return randomBytes(length).toString('hex');
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, direction } = await request.json();
    
    // Generate token and store in DB
    const token = generateRandomToken(16);
    await db.query(`
      UPDATE users SET magic_link_token = $1 WHERE email = $2
    `, [token, email]);
    
    // Create magic link URL
    const magicLinkUrl = `https://qikr.co.uk/auth/link?token=${token}&email=${encodeURIComponent(email)}`;
    
    // Determine email content
    const device = direction === 'desktop-to-mobile' ? 'iPhone' : 'desktop';
    
    // Send email directly with Resend
    const { data, error } = await resend.emails.send({
      from: 'qikr <onboarding@qikr.co.uk>',
      to: email,
      subject: `Complete your qikr setup on ${device}`,
      html: `
        <h1>Complete your qikr setup on ${device}</h1>
        <p>Click the link below to finish setting up qikr:</p>
        <a href="${magicLinkUrl}" style="background-color: #8B5CF6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Complete Setup on ${device}
        </a>
        <p><em>This link will expire after use.</em></p>
      `
    });

    if (error) {
      throw new Error(`Resend error: ${error.message}`);
    }
    
    //console.log('✅ Magic link email sent via Resend');
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error sending magic link:', error);
    return NextResponse.json({ error: 'Failed to send magic link' }, { status: 500 });
  }
}