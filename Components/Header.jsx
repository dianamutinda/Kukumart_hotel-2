import './Components.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src="/assets/kukumart.jpg" alt="Kukumart Hotel Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to="/menu" onClick={toggleMenu}>Menu</NavLink></li>
            <li><NavLink to="/rooms" onClick={toggleMenu}>Rooms</NavLink></li>
            <li><NavLink to="/gallery" onClick={toggleMenu}>Gallery</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
