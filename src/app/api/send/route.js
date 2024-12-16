import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    // Get the request body as a string first
    const text = await request.text();
    console.log('Raw request body:', text);

    // Parse the JSON manually
    if (!text) {
      return NextResponse.json({ error: 'Empty request body' }, { status: 400 });
    }

    const body = JSON.parse(text);
    console.log('Parsed body:', body);

    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json({ 
        error: "Missing required fields" 
      }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['meen_otwo@hotmail.com'],
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error details:', error);
    return NextResponse.json({ 
      error: error.message || 'Internal server error' 
    }, { status: 500 });
  }
}