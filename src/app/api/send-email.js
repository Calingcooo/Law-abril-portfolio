"use server";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  console.log("Hit!!!")

  res.status(200).send({ message: "Success" });

//   const { email, subject, content } = req.body;

//   const transporter = nodemailer.createTransport({
//     host: "smtp.hostinger.com",
//     port: 587, // Port (use 587 for TLS, 465 for SSL)
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: process.env.NEXT_APP_INQUIRY_EMAIL,
//       pass: process.env.NEXT_APP_INQUIRY_EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "demonic.hellish@gmail.com",
//     subject: subject,
//     text: content,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Failed to send email" });
//   }
}
