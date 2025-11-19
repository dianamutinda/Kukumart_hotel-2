import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-text">
          <h3>about us</h3>
          <h2>Where Heritage Meets Hospitality</h2>
          <p>
            Kukumart Hotel is a family-owned sanctuary where African heritage
            and modern comfort blend seamlessly. Founded by our parents and
            lovingly nurtured by their children, our hotel is more than just a
            place to stay—it’s a legacy of warmth, tradition, and community.
          </p>
          <p>
            We offer guests a unique experience rooted in homegrown hospitality,
            delicious cuisine, and restful stays. Whether you're visiting for
            leisure, business, or a family retreat, Kukumart Hotel welcomes you
            with open arms and a sense of belonging.
          </p>
        </div>
        <div className="about-image">
          <img
            src="/assets/IMG-20250812-WA0042.jpg"
            alt="Kukumart Hotel Family Legacy"
          />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To provide a serene and culturally rich hospitality experience
              that reflects the warmth and traditions of African heritage.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To be a leading destination for travelers seeking authentic
              African hospitality, comfort, and community.
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Meet the Family</h2>
          <p>
            Behind Kukumart Hotel is a passionate family dedicated to preserving
            tradition and creating memorable guest experiences. From our
            founders to our staff, every member plays a role in making your stay
            special.
          </p>
          <div className="team-images">
            <img
              src="/assets/IMG-20250812-WA0047.jpg"
              alt="Team Members"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
