import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{9,15}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address.";
    if (!phoneRegex.test(formData.phone)) newErrors.phone = "Enter a valid phone number (9–15 digits).";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // Replace with your hotel’s WhatsApp number (international format, no '+', spaces, or dashes)
    const phoneNumber = "254712345678"; // example for Kenya (+254...)
    const text = `Hello Kukumart Hotel,%0A%0AMy name is ${formData.name}.%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage:%0A${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you’re planning a stay, have
          questions, or just want to say hello, feel free to reach out.
        </p>

        <div className="contact-form-map">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="e.g. 0712345678"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}

              <button type="submit">Send via WhatsApp</button>
            </form>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Kukumart%20Hotel%2C%20Machakos%2C%20Kenya&hl=en&z=15&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Kukumart Hotel Location"
            ></iframe>
          </div>
        </div>
    </section>
  );
};

export default Contact;
