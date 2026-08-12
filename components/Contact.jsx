"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("✓ Message received — I'll reply within 24 hours.");
    e.currentTarget.reset();
  };

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <h2 className="dim">
          Contact <b>— 07</b>
        </h2>
        <form onSubmit={handleSubmit} className="reveal contact-form-solo">
          <div className="field">
            <label>Name</label>
            <input type="text" required placeholder="Your name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" required placeholder="you@email.com" />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea required placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message →
          </button>
          <div className="form-status">{status}</div>
        </form>
      </div>
    </section>
  );
}
