import { useEffect } from "react";

export default function Reservations() {

  useEffect(() => {
    // Load the Resy script dynamically
    const script = document.createElement("script");
    script.src = "https://widgets.resy.com/embed.js";
    script.async = true;

    script.onload = () => {
      if (window.resyWidget) {
        window.resyWidget.addButton(
          document.getElementById("resyButton"),
          {
            venueId: 9985,
            apiKey: "okbCVZshqhoQQYn7zT68y7aDSxhvLFdP",
            replace: true
          }
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup (optional)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen pt-24 px-6 text-center">
      <h1 className="text-5xl font-serif text-gold mb-12">Reservations</h1>

      <a
        href="https://resy.com/cities/charlottesville-va/venues/carmellos-restaurant-wine-bar"
        id="resyButton"
        className="text-gold text-2xl underline"
      >
        Book your Carmello's Restaurant & Wine Bar reservation on Resy
      </a>
    </div>
  );
}
