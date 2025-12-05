export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gold/30 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT – RESTAURANT INFO */}
        <div>
          <h3 className="text-2xl font-serif text-gold mb-4">
            Carmello’s Restaurant & Wine Bar
          </h3>
          <p className="text-gray-300 leading-relaxed">
            400 Twenty-Ninth Place Ct.<br />
            Charlottesville, VA 22901<br />
            (434) 977-5200
          </p>
        </div>

        {/* MIDDLE – HOURS */}
        <div>
          <h3 className="text-2xl font-serif text-gold mb-4">Hours</h3>
          <p className="text-gray-300 leading-relaxed">
            Monday: Closed
            Tuesday– Thursday: 5:00 PM – 9:00 PM<br />
            Friday – Saturday: 5:00 PM – 9:30 PM<br />
            Sunday 5:00 PM – 9:00 PM
          
          </p>
        </div>

        {/* RIGHT – SOCIAL */}
        <div>
          <h3 className="text-2xl font-serif text-gold mb-4">Connect With Us</h3>

          <div className="flex gap-4">
            <a href="https://www.facebook.com/CarmellosRestaurant/" className="text-gold hover:text-white transition text-xl">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/carmellosrestaurantwinebar/" className="text-gold hover:text-white transition text-xl">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="text-center text-gray-400 text-sm mt-12">
        © {new Date().getFullYear()} Carmello’s Restaurant & Wine Bar. All rights reserved.
      </div>
    </footer>
  );
}
