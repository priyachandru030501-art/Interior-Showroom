import { useState } from "react";
import "../assets/style/Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main className="contact-page">
      <section className="contact-banner" data-aos="fade-down">
        <p className="eyebrow">WE'D LOVE TO HEAR FROM YOU</p>
        <h1>Let's start a <em>conversation.</em></h1>
        <p>Questions, ideas, or a space waiting for a new look? Get in touch.</p>
      </section>

      <section className="contact-layout">
        <div className="contact-information" data-aos="fade-right">
          <p className="eyebrow">SAY HELLO</p>
          <h2>Every great space<br />starts with an idea.</h2>
          <p className="contact-intro">
            Tell us what you're dreaming of. We'd be happy to hear about
            your plans and help you take the next step.
          </p>

          <div className="contact-detail">
            <span>Email</span>
            <p>hello@interio.example</p>
          </div>

          <div className="contact-detail">
            <span>Phone</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-detail">
            <span>Working hours</span>
            <p>Monday–Saturday, 9 AM–6 PM</p>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          data-aos="fade-left"
        >
          <p className="eyebrow">SEND US A NOTE</p>
          <h2>Tell us a little more.</h2>

          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" placeholder="e.g. Priya" required />

          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" placeholder="you@example.com" required />

          <label htmlFor="contact-subject">What can we help with?</label>
          <select id="contact-subject" name="subject" defaultValue="" required>
            <option value="" disabled>Select a topic</option>
            <option value="furniture">Furniture enquiry</option>
            <option value="interior">Interior design</option>
            <option value="order">Order support</option>
            <option value="other">Something else</option>
          </select>

          <label htmlFor="contact-message">Your message</label>
          <textarea id="contact-message" name="message" rows="5" placeholder="Tell us about your idea..." required />

          <button type="submit" className="button-dark">Send message ↗</button>

          {submitted && (
            <p className="form-success">
              Thank you! Your demo form was submitted. No email was sent.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}