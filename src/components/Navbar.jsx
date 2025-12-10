import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when navigating
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Scroll shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 
        ${scrolled ? "bg-black/95 py-2 shadow-lg" : "bg-black/70 py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-serif text-gold tracking-wide hover:text-yellow-500 transition"
        >
          Carmello’s
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-xl">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/menu">Menu</NavItem>
          <NavItem to="/wine">Wine</NavItem>
          <NavItem to="/reservations">Reservations</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gold text-4xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden bg-black/95 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 text-lg">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/menu">Menu</NavItem>
          <NavItem to="/wine">Wine</NavItem>
          <NavItem to="/reservations">Reservations</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
      </div>
    </header>
  );
}

/* =============================================
   NAV ITEM COMPONENT
============================================= */
function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-200 hover:text-gold transition py-2"
    >
      {children}
    </Link>
  );
}
