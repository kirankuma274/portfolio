import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form
        className="contact-form"
        action="https://formspree.io/f/movwyvzz"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="_replyto"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
