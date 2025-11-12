import React from "react";
import { useNavigate } from "react-router-dom";
import "./Rooms.css";

export default function Rooms() {
  const navigate = useNavigate();

  const rooms = [
    {
      name: "Standard Room (Walk-in Only)",
      price: 1000,
      image: "/assets/_MG_1296.JPG",
      description:
        "A basic standard room suitable for walk-in guests. Comfortable and affordable, but without a hot shower. Not available for online booking.",
      canBook: false,
    },
    {
      name: "Comfort Room (Hot Shower)",
      price: 1500,
      image: "/assets/_MG_1287.JPG",
      description:
        "A cozy room with a hot shower, ideal for solo travelers or couples looking for comfort at an affordable rate.",
      canBook: true,
    },
    {
      name: "Spacious Deluxe Room (Hot Shower)",
      price: 1800,
      image: "/assets/_MG_1323.JPG",
      description:
        "A larger, more spacious room with a hot shower, perfect for guests who prefer extra comfort and room space.",
      canBook: true,
    },
  ];

  const handleBook = (roomName) => {
    navigate(`/booking?room=${encodeURIComponent(roomName)}`);
  };

  return (
    <section className="rooms-section">
      <h2 className="section-title">Our Rooms</h2>
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <div className="image-container">
              <img src={room.image} alt={room.name} />
            </div>
            <div className="room-info">
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <div className="price">
                <span>KES {room.price.toLocaleString()} / night</span>
                <small>
                  or KES {(room.price + 400).toLocaleString()} with bed & breakfast
                </small>
              </div>
              {room.canBook ? (
                <button
                  onClick={() => handleBook(room.name)}
                  className="book-button"
                >
                  Book Now
                </button>
              ) : (
                <button className="book-button disabled" disabled>
                  Walk-in Only
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
