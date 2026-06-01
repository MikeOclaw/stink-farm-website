import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const BREVO_LIST_ID = 3;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!response.ok && response.status !== 204) {
      const data = await response.json();
      // Contact already exists is fine — treat as success
      if (data?.code === 'duplicate_parameter') {
        return NextResponse.json({ success: true });
      }
      console.error('Brevo error:', data);
      return NextResponse.json({ error: 'Could not subscribe. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
