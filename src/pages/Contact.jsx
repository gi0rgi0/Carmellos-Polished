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
    <>
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
            <p className="text-green-400 text-center mt-2">
              Message sent successfully!
            </p>
          )}
          {status === "ERROR" && (
            <p className="text-red-400 text-center mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
      {/* LOCATION SECTION */}
      <div className="mt-24 text-center">
        <h2 className="text-4xl font-serif text-gold mb-6">Find Us</h2>

        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          400 Twenty-Ninth Place Ct
          <br />
          Charlottesville, VA 22901
          <br />
          (434) 977-5200
        </p>
        {/* CALL NOW BUTTON (Mobile-Friendly) */}
        <div className="mt-10 text-center md:hidden">
          <a
            href="tel:4342440000"
            className="inline-block w-full max-w-xs mx-auto bg-gold text-black font-semibold text-xl py-4 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Call Now
          </a>
        </div>

        {/* GOOGLE MAP */}
        <div className="w-full max-w-4xl mx-auto h-[400px] border border-gold rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Carmello’s Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.423301602984!2d-78.4925!3d38.0759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b387f8ec52d7d1%3A0x4bfaf6176f0c1f3a!2s400%20Twenty-Ninth%20Place%20Ct%2C%20Charlottesville%2C%20VA%2022901!5e0!3m2!1sen!2sus!4v1701579999999!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
