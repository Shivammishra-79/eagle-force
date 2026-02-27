require("dotenv").config();
const express = require("express");
const { Resend } = require("resend");
const cors = require("cors");

const app = express();
// API Key .env se uthayega
const resend = new Resend(process.env.RESEND_API_KEY); 
const PORT = process.env.PORT || 10000;

app.use(cors({ origin: "*" }));
app.use(express.json());

// Console log to verify Env on Render
console.log("--- SYSTEM CHECK ---");
console.log("Resend Key Status:", process.env.RESEND_API_KEY ? "LOADED ✅" : "MISSING ❌");
console.log("--------------------");

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Eagle Force <onboarding@resend.dev>', // Free plan mein yahi sender rahega
      to: 'sam7317892429@gmail.com', // Aapki enquiry email
      subject: `🔥 New Web Enquiry: ${name}`,
      html: `
        <h3>New Lead Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    console.log("✅ SUCCESS:", data);
    res.status(200).json({ success: true, message: "Enquiry sent!" });

  } catch (err) {
    console.error("❌ RESEND ERROR:", err.message);
    res.status(500).json({ error: "Failed to send email", details: err.message });
  }
});

app.get("/", (req, res) => res.send("Eagle Force API (Resend Mode) is Live! 🚀"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});