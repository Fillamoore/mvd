import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/app/actions/createUser';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Uh?
    if (!email || typeof email !== 'string') {
      console.error("❌ Invalid email payload:", email);
      return NextResponse.json(
        { success: false, error: 'Invalid email provided' },
        { status: 400 }
      );
    }

    console.log("📨 Received email:", email);
    const result = await createUser(email);
    console.log("✅ createUser result:", result);

    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error("💥 API route error:", message);
    return NextResponse.json(
      { success: false, error: `API error: ${message}` },
      { status: 500 }
    );
  }
}
