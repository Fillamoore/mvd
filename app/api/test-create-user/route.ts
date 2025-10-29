// app/api/test-create-user/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/app/actions/createUser';

export async function GET(req: NextRequest) {
  const testEmail = 'testuser@example.com'; // Replace as needed
  const result = await createUser(testEmail);
  return NextResponse.json(result);
}
