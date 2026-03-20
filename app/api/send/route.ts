import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { email, name, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // later change to your domain
      to: "st.festus4cruise@gmail.com", // YOUR EMAIL
      subject: `New message from ${name}`,
      html: `
        <h2>New Client Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}