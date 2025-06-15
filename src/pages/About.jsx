import "../styles/About.css";
function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I’m a passionate Computer Science graduate with a strong foundation in programming
            and a deep interest in web development. I aim to build impactful, scalable, and
            user-friendly digital solutions. I enjoy learning new technologies and thrive in
            collaborative environments that encourage innovation and creativity.
          </p>
          <h3>🎓 Education</h3>
          <ul className="timeline">
            <li>
              <span className="year">2021 - 2025</span>
              <p><strong>BS Computer Science</strong> - University of Gujrat, Gujrat</p>
            </li>
            <li>
              <span className="year">2019 - 2021</span>
              <p><strong>HSSC (Pre-Engineering)</strong> - Jinnah Public School & College, Gujrat</p>
            </li>
            {/* <li>
              <span className="year">2017 - 2019</span>
              <p><strong>SSC (Science)</strong> - Govt. Hight School 212 JB, Bhawana, Chiniot</p>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About;
