import React, { useRef, useEffect } from "react";
import "./Gallery.css";

const images = [
  { src: "/assets/IMG-20250812-WA0026.jpg", text: "Steaming, delicious rice dish" },
  { src: "/assets/IMG-20250812-WA0036.jpg", text: "Active game on court" },
  { src: "/assets/IMG-20250812-WA0037.jpg", text: "Sparkling clean vehicle service" },
  { src: "/assets/IMG-20250812-WA0043.jpg", text: "Haircuts and grooming services" },
  { src: "/assets/_MG_1297.JPG", text: "Handcrafted traditional chairs" },
  { src: "/assets/IMG-20250812-WA0023.jpg", text: "Freshly sliced red tomatoes" },
  { src: "/assets/IMG-20250812-WA0050.jpg", text: "Active game on court" },
  { src: "/assets/IMG-20250812-WA0030.jpg", text: "Juicy, ready-to-eat chicken" },
  { src: "/assets/IMG_2497.png", text: "Secluded room exterior" },
  { src: "/assets/IMG_2501.png", text: "Colorful, fresh blooming flowers" },
  { src: "/assets/_MG_1331.JPG", text: "Haircuts and grooming services" },
  { src: "/assets/IMG_2515.png", text: "Friendly and helpful team" },
  { src: "/assets/IMG_2523.png", text: "Peaceful natural landscape scene" },
  { src: "/assets/_MG_1305.JPG", text: "Clean and hygienic washrooms" },
  { src: "/assets/IMG_2528.png", text: "Peaceful natural landscape scene" },
  { src: "/assets/_MG_1292.JPG", text: "Handcrafted traditional chairs" },
  { src: "/assets/IMG_2460.png", text: "Evening Ambiance" },
  { src: "/assets/IMG-20251010-WA0046.jpg", text: "Skilled kitchen professional" },
  { src: "/assets/IMG-20251010-WA0047.jpg", text: "Farm chickens safely enclosed" },
  { src: "/assets/IMG-20251010-WA0048.jpg", text: "Juicy, ready-to-eat chicken" },
  { src: "/assets/IMG-20251010-WA0049.jpg", text: "Juicy chicken on fire" },
  { src: "/assets/IMG-20251010-WA0050.jpg", text: "Raw chicken ready-to-cook" },
];

const Gallery = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Auto play audio when page loads
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4; // Set to a calm volume
      audio.play().catch((err) => console.log("Autoplay blocked:", err));
    }
  }, []);

  return (
    <section className="gallery">
      <div className="gallery-txt">
        <h2>Our Gallery</h2>
        <p>
          Step into the world of Kukumart Hotel through our gallery. From the
          warm ambiance of our rooms to the vibrant flavors served at our
          restaurant, every picture tells a story of comfort, tradition, and
          hospitality.
        </p>
      </div>

      <div className="gallery-video">
  <iframe
    src="https://drive.google.com/file/d/1zGDiet_YHhHzX-MdwpPvholmuXFLlirT/preview"
    title="Drone Video"
    width="100%"
    height="500px"
    allow="autoplay"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>


      <div className="gallery-imgs">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.text} />
            <div className="hover-overlay">
              <h3>{image.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;