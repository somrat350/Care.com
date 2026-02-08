"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      e.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    }, 1000);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full"
        required
      />

      <input
        type="email"
        placeholder="Your Email"
        className="input input-bordered w-full"
        required
      />

      <textarea
        placeholder="Your Message"
        className="textarea textarea-bordered w-full"
        rows={4}
        required
      ></textarea>

      <button
        type="submit"
        className={`btn btn-secondary w-full ${loading ? "btn-disabled" : ""}`}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="loading loading-spinner loading-xs"></span>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
