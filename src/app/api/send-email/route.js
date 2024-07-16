export const dynamic = "force-dynamic"; // defaults to auto
import nodemailer from "nodemailer";

export async function POST(request) {
  if (request.method !== "POST") {
    return Response.json(
      { success: false, message: "Only POST requests allowed" },
      { status: 405 }
    );
  }

  const formData = await request.formData();

  const {
    first,
    last,
    cnumber,
    email,
    content,
    address_1,
    address_2,
    region,
    city,
    barangay,
    comm_pref,
    disclaimer,
  } = Object.fromEntries(formData);

  // const transporter = nodemailer.createTransport({
  //   host: "smtp.hostinger.com",
  //   port: 465, // Port (use 587 for TLS, 465 for SSL)
  //   secure: true, // true for 465, false for other ports
  //   auth: {
  //     user: `${process.env.NEXT_APP_INQUIRY_EMAIL}`,
  //     pass: `${process.env.NEXT_APP_INQUIRY_EMAIL_PASS}`,
  //   },
  // });

  // const emailContent = `
  // <p>Name: ${first} ${last}</p>
  // <p>Contact Number: ${cnumber}</p>
  // <p>Address: ${address_1} ${address_2}, ${region}, ${city}, ${barangay}</p>
  // <p>Communication Preference: ${comm_pref}</p>
  // <p>Inquiry: ${content}</p>
  // `;

  // const mailOptions = {
  //   from: `${process.env.NEXT_APP_INQUIRY_EMAIL}`,
  //   to: `${process.env.NEXT_APP_INQUIRY_EMAIL}`,
  //   subject: "Online Concern/Inquiry",
  //   html: emailContent,
  // };

  if (disclaimer !== "on") {
    return Response.json(
      { success: false, message: "You have to read the disclaimer to proceed" },
      { status: 400 }
    );
  }

  // try {
  //   await transporter.sendMail(mailOptions);
  //   return Response.json(
  //     { success: true, message: "Inquiry sent successfully!" },
  //     { status: 200 }
  //   );
  // } catch (error) {
  //   console.error(error);
  //   return Response.json(
  //     { success: false, message: `Failed to send email. ${error}` },
  //     { status: 500 }
  //   );
  // }
}
