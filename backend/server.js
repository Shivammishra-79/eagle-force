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
  console.log("📩 Incoming Request Data:", req.body);

  try {
    // 🚀 BREVO SMTP RELAY (Stable for Render)
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // TLS use karega
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, // Wahi lambi key jo aapne bheji
      },
    });

    const mailOptions = {
      from: `"Eagle Force" <${process.env.EMAIL_USER}>`,
      to: "sam7317892429@gmail.com", // Jahaan aap email chahte hain
      subject: `🔥 New Contact: ${name}`,
      text: `Enquiry from: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ SUCCESS: Email sent via Brevo!");
    res.status(200).json({ success: true, message: "Message Sent!" });

  } catch (err) {
    console.error("❌ BREVO ERROR:", err.message);
    res.status(500).json({ error: "Email delivery failed", details: err.message });
  }
});

app.get("/", (req, res) => res.send("API is Live with Brevo! 🚀"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});