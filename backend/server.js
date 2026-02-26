require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Eagle Force Website" <${process.env.EMAIL_USER}>`,
      to: "sam7317892429@gmail.com", 
      replyTo: email,
      subject: `🔥 New Web Enquiry: ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ SUCCESS: Email Sent via Gmail!");
    res.status(200).json({ success: true, message: "Enquiry sent!" });

  } catch (err) {
    console.error("❌ GMAIL ERROR:", err.message);
    res.status(500).json({ error: "Gmail Failed", details: err.message });
  }
});

app.get("/", (req, res) => res.send("Eagle Force API (Gmail Mode) is Running! 🚀"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});