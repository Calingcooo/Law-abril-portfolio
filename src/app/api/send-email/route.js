export const dynamic = "force-dynamic";
import nodemailer from "nodemailer";

export async function POST(request) {
  const allowedOrigins = [
    "https://www.abrillawoffice.com",
    "http://localhost:3000",
  ];

  const corsHeaders = {
    "Access-Control-Allow-Origin": allowedOrigins,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle OPTIONS request for CORS preflight
  if (request.method === "OPTIONS") {
    return Response.json(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (request.method !== "POST") {
    return Response.json(
      { success: false, message: "Only POST requests allowed" },
      {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
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

  const transporter = nodemailer.createTransport({
    host: `${process.env.NEXT_APP_INQUIRY_EMAIL_HOST}`,
    port: process.env.NEXT_APP_INQUIRY_EMAIL_PORT,
    secure: process.env.NEXT_APP_INQUIRY_EMAIL_SECURE,
    auth: {
      user: `${process.env.NEXT_APP_INQUIRY_EMAIL}`,
      pass: `${process.env.NEXT_APP_INQUIRY_EMAIL_PASS}`,
    },
  });

  const emailContent = `
  <p>Name: ${first} ${last}</p>
  <p>Email Address: ${email}</p>
  <p>Contact Number: ${cnumber}</p>
  <p>Address: ${address_1} ${address_2}, ${region}, ${city}, ${barangay}</p>
  <p>Communication Preference: ${comm_pref}</p>
  <p>Inquiry: ${content}</p>
  `;

  const mailOptions = {
    from: `${process.env.NEXT_APP_INQUIRY_EMAIL}`,
    to: `${process.env.NEXT_APP_INQUIRY_EMAIL}`,
    subject: "Online Concern/Inquiry",
    html: emailContent,
  };

  if (disclaimer !== "on") {
    return Response.json(
      { success: false, message: "You have to check and read the disclaimer before proceeding" },
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    await transporter.sendMail(mailOptions);
    return Response.json(
      { success: true, message: "Inquiry sent successfully!" },
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: `Failed to send email. ${error}` },
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
}
