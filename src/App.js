import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Wine from "./pages/Wine";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-24"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/wine" element={<Wine />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Footer />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
