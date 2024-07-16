export const dynamic = "force-dynamic"; // defaults to auto
import nodemailer from "nodemailer";

export async function POST(request) {
  const reqBody = await request.json();

  const { email, subject, content } = reqBody;

  console.log({ email, subject, content });

  if (request.method !== "POST") {
    return Response.json(
      { success: false, message: "Only POST requests allowed" },
      { status: 405 }
    );
  }

  return Response.json(
    { success: true, message: `${request.method}` },
    { status: 200 }
  );
}
