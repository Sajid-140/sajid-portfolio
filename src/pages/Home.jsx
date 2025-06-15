import React from "react";
import "../styles/Home.css";
import profile from "../assets/my pic 3a.jpg";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-text">
        <h1>Hi! I'm Sajid 👀</h1>
        <h4>and I'm a Programmer 💻</h4>
        <p>
          I am a passionate Full Stack Developer 🚀 skilled in web development
          using JavaScript, React, Node.js, and various libraries. I love
          solving real-world problems and building impactful software.
        </p>
      </div>
      <div className="home-image">
        <img src={profile} alt="Sajid Ali" />
      </div>
    </section>
  );
}
export default Home;