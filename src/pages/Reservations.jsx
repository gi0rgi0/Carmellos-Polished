import { Helmet } from "react-helmet";
import { useEffect } from "react";
import useReveal from "../hooks/useReveal";

export default function Reservations() {
  const ref = useReveal();

  useEffect(() => {
    // Remove old script to avoid duplicates
    const existing = document.querySelector("#resy-script");
    if (existing) existing.remove();

    // Load Resy embed script
    const script = document.createElement("script");
    script.src = "https://widgets.resy.com/embed.js";
    script.id = "resy-script";
    script.async = true;

    script.onload = () => {
      if (window.resyWidget) {
        window.resyWidget.addButton(document.getElementById("resyButton"), {
          venueId: 9985,
          apiKey: "okbCVZshqhoQQYn7zT68y7aDSxhvLFdP",
          replace: true,
        });
      }
    };

    document.body.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <>
      <Helmet>
        <title>Reservations | Carmello’s Restaurant & Wine Bar</title>
        <meta
          name="description"
          content="Reserve your table at Carmello’s Restaurant & Wine Bar in Charlottesville, VA. Use our Resy-powered online reservation system."
        />
      </Helmet>

      <div
        ref={ref}
        className="text-white px-6 py-20 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-6xl font-serif text-gold mb-12">Reservations</h1>

        <p className="text-xl text-gray-300 mb-8">
          Secure your dining experience at Charlottesville’s premier Italian
          restaurant.
        </p>

        <div className="flex justify-center">
          <a
            id="resyButton"
            className="bg-gold text-black font-semibold text-xl px-8 py-4 rounded-lg hover:bg-yellow-500 transition"
            href="https://resy.com/cities/charlottesville-va/venues/carmellos-restaurant-wine-bar"
          >
            Book with Resy
          </a>
        </div>
      </div>
    </>
  );
}
