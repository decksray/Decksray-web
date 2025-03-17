import "./SubscriptionForm.scss";
import { useState } from "react";
import React, { useRef } from "react";

export const SubscriptionFormMailerLite = () => {
  const form = useRef();
  const apiKey = import.meta.env.VITE_MAILERLITE_API_TOKEN;
  const groupId = import.meta.env.VITE_MAILERLITE_GROUP_ID;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const data = {
    email: email,
    fields: { name: name },
    groups: [groupId],
    status: "active",
  };

  const handleSubmit = async (e) => {
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
      const response = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStateMessage("SUCCESS! 🎉");
        setEmail("");
        setName("");
      } else {
        setStateMessage(result.message || "Something went wrong. Try again!");
      }
    } catch (error) {
      setStateMessage("Error: Unable to subscribe.");
      console.error("Error:", error);
    }

    resetStateMessage();
  };

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
