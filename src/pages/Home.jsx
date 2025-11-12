import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiCoffee, FiSmile, FiMapPin } from "react-icons/fi";
import "./Home.css";

const KukumartHotel = () => {
  const navigate = useNavigate();

  const reasons = [
    {
      title: "Clean & Comfortable Rooms",
      description:
        "Our rooms are maintained to the highest standard, ensuring a cozy and hygienic stay for all guests.",
      icon: <FiHome />,
    },
    {
      title: "Hot Showers & Amenities",
      description:
        "Enjoy warm showers and all essential amenities that make your stay relaxing and convenient.",
      icon: <FiCoffee />,
    },
    {
      title: "Friendly & Welcoming Staff",
      description:
        "Our staff treats you like family, ensuring your stay is enjoyable and stress-free.",
      icon: <FiSmile />,
    },
    {
      title: "Convenient Location",
      description:
        "Easily accessible from main transport routes, saving you time and hassle during your trip.",
      icon: <FiMapPin />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="hero">
          <h2>Experience the Heart of African Hospitality</h2>
          <p>
            At Kukumart Hotel, our family-owned generational property invites
            you to unwind in a cool, serene escape. Rooted in African
            traditions and enriched with modern comfort, we’re more than a hotel
            — we’re a home where heritage and tranquility meet.
          </p>
          <button className="btn" onClick={() => navigate("/rooms")}>
            Explore More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="about">
          <div className="about-text">
            <h3>about us</h3>
            <h2>Where Heritage Meets Hospitality</h2>
            <p>
              At Kukumart Hotel, every corner tells a story. Founded by our
              parents and now lovingly nurtured by his children, the hotel is
              more than a place to stay—it’s a legacy of warmth, tradition, and
              community. We blend the charm of homegrown African hospitality
              with the comforts of modern living, offering our guest a welcoming
              escape filled with good food, comfortable stays, and unforgettable
              experiences. Whether you’re here for leisure, business, or a
              family getaway, Kukumart Hotel promises not just accommodation—but
              a feeling of belonging.
            </p>
            <button className="btn" onClick={() => navigate("/about")}>
              Know More
            </button>
          </div>
          <div className="about-image">
            <img src="./assets/IMG_2528.png" alt="About Kukumart" />
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section>
        <div className="amenities">
          <div className="amenities-top">
            <div className="amenities-text">
              <h2>Our Amenities</h2>
              <p>
                At Kukumart Hotel, we believe true comfort lies in the details.
                That’s why we’ve thoughtfully curated a range of amenities to
                make your stay relaxing, convenient, and memorable.
              </p>
            </div>
            <div className="btn">
              <button onClick={() => navigate("/amenities")}>View More</button>
            </div>
          </div>
          <div className="amenities-container">
            <div className="amenities-card">
              <i className="bi bi-wifi"></i>
              <h3>Wifi</h3>
              <p>Fast and reliable internet access</p>
            </div>
            <div className="amenities-card">
              <i className="bi bi-lightning-charge-fill"></i>
              <h3>Power Backup</h3>
              <p>24-hour power backup</p>
            </div>
            <div className="amenities-card">
              <i className="bi bi-shield-lock-fill"></i>
              <h3>24/7 Security</h3>
              <p>State-of-the-art security measures</p>
            </div>
            <div className="amenities-card">
              <i className="bi bi-car-front-fill"></i>
              <h3>Car Wash</h3>
              <p>Clean and hygienic car wash</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section>
        <div className="gallery">
          <div className="gallery-text">
            <h2>Our Gallery</h2>
            <p>
              Step into the world of Kukumart Hotel through our gallery. From
              the warm ambiance of our rooms to the vibrant flavors served at
              our restaurant, every picture tells the story of comfort,
              tradition, and hospitality.
            </p>
            <div className="btn">
              <button onClick={() => navigate("/gallery")}>View More</button>
            </div>
          </div>
          <div className="gallery-images">
            {[
              "IMG-20250812-WA0026.jpg",
              "IMG-20250812-WA0036.jpg",
              "IMG-20250812-WA0037.jpg",
              "IMG-20250812-WA0043.jpg",
              "IMG-20250812-WA0023.jpg",
              "IMG-20250812-WA0050.jpg",
              "IMG-20250812-WA0030.jpg",
            ].map((img, i) => (
              <img key={i} src={`./assets/${img}`} alt={`Gallery ${i}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="restaurant-section" id="restaurant">
        <div className="photo-container">
          <img
            src="./assets/grilling.jpg"
            alt="Traditional Grilling at Kukumart Hotel"
          />
          <div className="photo-overlay">Traditional Flavors • Homey Vibes</div>
        </div>

        <div className="restaurant-text">
          <h2>A Taste of Home at Kukumart Hotel</h2>
          <p>
            At Kukumart Hotel, dining is more than just a meal – it’s a
            celebration of tradition, warmth, and togetherness. Our grill brings
            out the rich flavors of recipes passed down through generations,
            creating a true home-away-from-home experience.
          </p>
          <button onClick={() => navigate("/menu")}>Explore Our Menu</button>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          Experience comfort, convenience, and care at every step of your stay.
        </p>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default KukumartHotel;
