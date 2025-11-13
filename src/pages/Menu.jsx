import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <section className="menu-section">
      <h2>Our Menu</h2>
      <p>
        Explore our selection of delicious meals and refreshing drinks crafted
        with passion and authentic flavor. Browse the full menu below.
      </p>

      <div className="menu-viewer">
        {/* Responsive PDF wrapper */}
        <div className="responsive-pdf">
          <iframe
            src="/assets/MENU.pdf"
            title="Kukumart Hotel Menu"
            style={{ border: "none", borderRadius: "12px" }}
          ></iframe>
        </div>

        {/* Optional download button */}
        <a
          href="/assets/MENU.pdf"
          download="Kukumart_Hotel_Menu.pdf"
          className="download-menu-btn"
        >
          📥 Download Menu (PDF)
        </a>
      </div>
    </section>
  );
};

export default Menu;
