import "./SubscriptionForm.scss";
import { useCallback, useState } from "react";
import { useRef } from "react";

export const SubscriptionFormMailerLite = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      const resetStateMessage = () => {
        setTimeout(() => {
          setStateMessage(null);
          setIsSubmitting(false);
          e.target.reset();
        }, 7000);
      };

      try {
        const body = new URLSearchParams();
        body.append("name", name);
        body.append("email", email);
        const response = await fetch("/cgi-bin/subscribe2newsletter.py", {
          method: "POST",
          body,
        });

        const result = await response.text();

        if (response.ok && result.trim() === "OK") {
          setStateMessage("SUCCESS! 🎉");
          setEmail("");
          setName("");
        } else {
          setStateMessage(
            result.message || "Something went wrong. Please try again!"
          );
        }
      } catch (error) {
        setStateMessage("Error: Unable to subscribe.");
        console.error("Error:", error);
      }

      resetStateMessage();
    },
    [name, email]
  );

  return (
    <div className="subscription-container">
      <div className="blur-wrapper">
        <h2>Subscribe to Our Newsletter!</h2>
        <form className="subscription-form" ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {stateMessage ? (
            <p className="newsletter-state-message">{stateMessage}</p>
          ) : (
            <button type="submit" value="Send" disabled={isSubmitting}>
              Subscribe
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
