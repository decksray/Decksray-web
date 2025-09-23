import "./ContactUs.scss";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SubscriptionFormMailerLite } from "../SubscriptionForm/SubscriptionFormMailerLite";

export const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result);
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          console.log("FAILED!", error.text);
          setStateMessage("Something went wrong, please try again later");
        }
      );

    e.target.reset();
  };

  return (
    <>
      <section id="contact-us">
        <div id="contact-us-header">
          <h2>Contact Us</h2>
          <h3>We&apos;d love to hear from you.</h3>
        </div>

        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              minLength="5"
              rows="15"
              cols="42"
              placeholder="Your Message here..."
              required
            />
          </div>

          {stateMessage ? (
            <p className="state-message">{stateMessage}</p>
          ) : (
            <button type="submit" value="Send" disabled={isSubmitting}>
              Send Message
            </button>
          )}
        </form>
      </section>
      <SubscriptionFormMailerLite />
    </>
  );
};
