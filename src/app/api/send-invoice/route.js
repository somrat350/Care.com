import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    const mailOptions = {
      from: `"Care.com" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Booking Confirmation – ${data.serviceName}`,
      html: `
  <div style="font-family: Arial, Helvetica, sans-serif; background:#f4f6f8; padding:20px;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:10px; overflow:hidden;">

      <!-- Header -->
      <div style="background:#fa3098; padding:20px; text-align:center;">
        <h1 style="color:#ffffff; margin:0;">Care.com</h1>
        <p style="color:#ffe6f2; margin:5px 0 0;">
          Trusted Care, When You Need It
        </p>
      </div>

      <!-- Body -->
      <div style="padding:24px; color:#333;">
        <h2 style="margin-top:0;">Hello ${data.name},</h2>

        <p style="font-size:15px; line-height:1.6;">
          Thank you for booking <strong>${
            data.serviceName
          }</strong> with Care.com.
          Your booking has been received and is currently <strong>Pending</strong>.
        </p>

        <!-- Booking Details -->
        <div style="margin:20px 0; border:1px solid #eee; border-radius:8px; overflow:hidden;">
          <table width="100%" cellpadding="10" cellspacing="0">
            <tr style="background:#f9fafb;">
              <td><strong>Service</strong></td>
              <td align="right">${data.serviceName}</td>
            </tr>
            <tr>
              <td><strong>Duration</strong></td>
              <td align="right">${data.duration} ${data.durationType}</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td><strong>Total Cost</strong></td>
              <td align="right"><strong>$ ${data.cost}</strong></td>
            </tr>
            <tr>
              <td><strong>Status</strong></td>
              <td align="right">
                <span style="
                  display:inline-block;
                  padding:4px 10px;
                  background:#fff3cd;
                  color:#856404;
                  border-radius:20px;
                  font-size:13px;
                ">
                  Pending
                </span>
              </td>
            </tr>
          </table>
        </div>

        <p style="font-size:14px; color:#555;">
          Our team will review your booking shortly. Once confirmed, you will receive another email.
        </p>

        <!-- CTA -->
        <div style="text-align:center; margin:30px 0;">
          <a href="${process.env.NEXTAUTH_URL}/myBookings"
            style="
              background:#fa3098;
              color:#ffffff;
              padding:12px 22px;
              text-decoration:none;
              border-radius:6px;
              font-weight:bold;
              display:inline-block;
            ">
            View My Bookings
          </a>
        </div>

        <p style="font-size:13px; color:#777;">
          Need help? Just reply to this email — we’re always here for you 💖
        </p>
      </div>

      <!-- Footer -->
      <div style="background:#f1f1f1; text-align:center; padding:14px;">
        <p style="margin:0; font-size:12px; color:#888;">
          © ${new Date().getFullYear()} Care.com — All rights reserved
        </p>
      </div>

    </div>
  </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
