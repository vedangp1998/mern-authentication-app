const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const sendOtpMail = async (email, otp) => {
  const emailTemplateSource = fs.readFileSync(
    path.join(__dirname, "otp.hbs"),
    "utf-8",
  );
  const template = handlebars.compile(emailTemplateSource);
  const htmlToSend = template({ otp });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailConfig = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "OTP for Password Reset",
    html: htmlToSend,
  };

  await transporter.sendMail(mailConfig);
  console.log("Email sent to:", email);
};

module.exports = { sendOtpMail };
