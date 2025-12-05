import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-gold/20 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-serif text-gold">
          Carmello’s
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-300 hover:text-gold transition">Home</Link>
          <Link to="/menu" className="text-gray-300 hover:text-gold transition">Menu</Link>
          <Link to="/wine" className="text-gray-300 hover:text-gold transition">Wine List</Link>
          <Link to="/reservations" className="text-gray-300 hover:text-gold transition">Reservations</Link>
          <Link to="/contact" className="text-gray-300 hover:text-gold transition">Contact</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-gold text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-md border-t border-gold/20 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 text-lg">
          <Link to="/" className="py-3 text-gray-200 hover:text-gold transition" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/menu" className="py-3 text-gray-200 hover:text-gold transition" onClick={() => setOpen(false)}>Menu</Link>
          <Link to="/wine" className="py-3 text-gray-200 hover:text-gold transition" onClick={() => setOpen(false)}>Wine List</Link>
          <Link to="/reservations" className="py-3 text-gray-200 hover:text-gold transition" onClick={() => setOpen(false)}>Reservations</Link>
          <Link to="/contact" className="py-3 text-gray-200 hover:text-gold transition" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
