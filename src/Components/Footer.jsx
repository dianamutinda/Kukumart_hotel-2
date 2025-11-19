import React, { useEffect } from 'react';
import './Components.css';

export default function Footer() {
  useEffect(() => {
    const year = new Date().getFullYear();
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = year;
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-column">
            <h3>Kukumart Hotel</h3>
            <p>
              Kukumart Hotel is a family-owned hospitality gem built on African heritage and modern comfort.
              Founded by our parents and now managed by siblings, we are dedicated to creating memorable
              experiences filled with warmth, culture, and serenity.
            </p>
            <p><strong>Where African Heritage Meets Serenity.</strong></p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/rooms">Rooms & Suites</a></li>
              <li><a href="/restaurant">Menu</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Amenities */}
          <div className="footer-column">
            <h4>Our Amenities</h4>
            <ul>
              <li>Reliable Power Backup</li>
              <li>Free High-Speed WiFi</li>
              <li>24/7 CCTV Security</li>
              <li>Spacious Parking</li>
              <li>Car Wash & Power Wash Services</li>
              <li>Specialty Chicken Cuisine</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>📍 Location: Syokimau, Machakos County, Kenya</p>
            <p>📞 Phone: <a href="tel:+254719587931">+254 719 587931</a></p>
            <p>📞 Phone: <a href="tel:+254722759318">+254 722 755918</a></p>
            <p>✉️ Email: <a href="mailto:nmmanda09@gmail.com">nmmanda09@gmail.com</a></p>
            <div className="social-links">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; <span id="year"></span> Kukumart Hotel. All Rights Reserved. | Designed by Diana.</p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="whatsapp-float">
        <a href="https://wa.me/+254719587931" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp"></i>
          <span className="hover-text">WhatsApp Us</span>
        </a>
      </div>
    </>
  );
}
