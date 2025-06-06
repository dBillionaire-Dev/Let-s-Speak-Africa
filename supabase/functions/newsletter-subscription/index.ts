
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const TARGET_EMAIL = 'nezerekunke.dev@gmail.com';

serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // If RESEND_API_KEY is available, use Resend service
    if (RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@yourdomain.com',
          to: TARGET_EMAIL,
          subject: 'New Newsletter Subscription',
          html: `
            <h2>New Newsletter Subscription</h2>
            <p>A new user has subscribed to the newsletter:</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subscription Date:</strong> ${new Date().toISOString()}</p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.text();
        console.error('Resend API error:', errorData);
        throw new Error('Failed to send notification email');
      }
    } else {
      // Fallback: Just log the subscription (for development)
      console.log(`New newsletter subscription: ${email} at ${new Date().toISOString()}`);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Newsletter subscription processed successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Failed to process newsletter subscription',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});
