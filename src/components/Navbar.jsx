import { Link } from 'react-router-dom';
export default function Navbar(){
  return (
    <nav className="bg-black/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 text-white py-4 border-b border-gold/30">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="text-2xl font-serif text-gold">Carmello’s</Link>
        <div className="hidden md:flex space-x-8 text-lg font-light">
          <Link to="/" className="hover:text-gold transition">Home</Link>
          <Link to="/menu" className="hover:text-gold transition">Menu</Link>
          <Link to="/wine" className="hover:text-gold transition">Wine List</Link>
          <Link to="/contact" className="hover:text-gold transition">Contact</Link>
        </div>
        <Link to="/reservations" className="bg-gold text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">Reservations</Link>
      </div>
    </nav>
  );
}
