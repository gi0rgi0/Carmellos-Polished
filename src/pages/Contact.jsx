import { Helmet } from "react-helmet";
import useReveal from "../hooks/useReveal";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useReveal();
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_orjwojm",
        "template_9oxce3q",
        formRef.current,
        "DlhTOjdE7Pqq5UJHA"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Carmello’s | Charlottesville VA</title>
        <meta
          name="description"
          content="Contact Carmello’s Restaurant & Wine Bar. Located at 400 Twenty-Ninth Place Ct, Charlottesville VA 22901. Send us a message or call now."
        />
      </Helmet>

      <div
        ref={ref}
        className="text-white px-6 py-20 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-6xl font-serif text-gold mb-12">Contact Us</h1>

        {/* CONTACT FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-black/40 border border-gold/30 p-8 rounded-lg max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full mb-4 p-3 rounded text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full mb-4 p-3 rounded text-black"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full mb-4 p-3 rounded h-40 text-black"
          ></textarea>

          <button
            type="submit"
            className="bg-gold text-black font-semibold text-xl w-full py-3 rounded hover:bg-yellow-500 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-gray-300 mt-4 text-lg">
              {status}
            </p>
          )}
        </form>

        {/* CALL NOW BUTTON */}
        <div className="mt-10">
          <a
            href="tel:4342440000"
            className="inline-block bg-gold text-black text-xl font-semibold px-8 py-4 rounded-lg hover:bg-yellow-500 transition"
          >
            Call Now: (434) 977-5200
          </a>
        </div>

        {/* ADDRESS */}
        <div className="mt-12 text-lg text-gray-300">
          <p>400 Twenty-Ninth Place Ct</p>
          <p>Charlottesville, VA 22901</p>
        </div>

        {/* GOOGLE MAP */}
        <div className="mt-10 w-full h-[400px] border border-gold/30 rounded overflow-hidden">
          <iframe
            title="Carmello's Map"
            src="https://www.google.com/maps?q=400+Twenty-Ninth+Place+Ct,+Charlottesville,+VA+22901&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded"
          ></iframe>
        </div>
      </div>
    </>
  );
}
