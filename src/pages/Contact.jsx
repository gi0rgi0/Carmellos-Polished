import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_orjwojm",
        "template_9oxce3q",
        formData,
        "DlhTOjdE7Pqq5UJHA"
      )
      .then(
        () => {
          setStatus("SUCCESS");
          setFormData({
            from_name: "",
            from_email: "",
            phone: "",
            message: "",
          });
        },
        () => {
          setStatus("ERROR");
        }
      );
  }

  return (
    <div className="bg-black text-white min-h-screen px-6 py-32">
      {/* Header */}
      <h1 className="text-5xl font-serif text-gold mb-12 text-center">
        Contact Us
      </h1>

      {/* Form Container */}
      <form
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-6 bg-black border border-gold/30 p-8 rounded-lg shadow-xl"
      >
        <div>
          <label className="block text-gold mb-1 font-serif">Name</label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-gold focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gold mb-1 font-serif">Email</label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-gold focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gold mb-1 font-serif">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black border border-gold focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gold mb-1 font-serif">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="w-full p-3 rounded bg-black border border-gold focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gold text-black py-3 text-xl font-semibold rounded hover:bg-yellow-500 transition"
        >
          Send Message
        </button>

        {status === "SUCCESS" && (
          <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
        )}
        {status === "ERROR" && (
          <p className="text-red-400 text-center mt-2">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}


