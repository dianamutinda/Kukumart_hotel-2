import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingPage.css";

export default function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const selectedRoom = params.get("room") || "Single Room";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    roomType: selectedRoom,
  });

  const [today, setToday] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setToday(currentDate);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, checkin, checkout, roomType } = formData;

    if (!name || !phone || !checkin || !checkout) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    if (checkout < checkin) {
      alert("⚠️ Checkout date cannot be earlier than check-in date.");
      return;
    }

    const message = `Hello Kukumart Hotel,%0A%0AI would like to book the following:%0A
🛏 Room Type: ${roomType}%0A
👤 Name: ${name}%0A
📞 Phone: ${phone}%0A
📅 Check-in: ${checkin}%0A
📅 Check-out: ${checkout}%0A%0A
Please confirm my booking.`;

    // Replace with your real WhatsApp number
    const phoneNumber = "254719587931";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Show popup
    setLoading(true);

    // Wait for 2 seconds, then open WhatsApp and show success
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <h2>Book Your Stay at Kukumart Hotel</h2>
        <p>Fill in your details to confirm your booking via WhatsApp.</p>

        {!success ? (
          <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="e.g. 07XXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="roomType">Room Type</label>
            <input
              type="text"
              id="roomType"
              name="roomType"
              value={formData.roomType}
              readOnly
            />

            <label htmlFor="checkin">Check-in Date</label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              min={today}
              value={formData.checkin}
              onChange={handleChange}
              required
            />

            <label htmlFor="checkout">Check-out Date</label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              min={formData.checkin || today}
              value={formData.checkout}
              onChange={handleChange}
              required
            />

            <div className="booking-actions">
              <button
                type="button"
                className="back-button"
                onClick={() => navigate("/rooms")}
              >
                ← Back to Rooms
              </button>

              <button type="submit" className="book-button">
                Book
              </button>
            </div>
          </form>
        ) : (
          <div className="success-message">
            <h3>🎉 Booking Request Sent!</h3>
            <p>
              You have been redirected to WhatsApp. Please complete your booking
              by sending the message.
            </p>
            <button className="back-button" onClick={() => navigate("/rooms")}>
              Back to Rooms
            </button>
          </div>
        )}
      </div>

      {/* Loading Popup */}
      {loading && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>⏳ Please wait... redirecting you to WhatsApp</p>
          </div>
        </div>
      )}
    </div>
  );
}
