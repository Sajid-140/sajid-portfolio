import "../styles/Certifications.css";
import excel from "../assets/certificates/excel.jpg";
import word from "../assets/certificates/word.jpg";
import python from "../assets/certificates/python.jpg";
import packet from "../assets/certificates/OS.jpg";

function Certifications() {
  return (
    <section className="cert-section" id="certifications">
      <h2 className="section-title">Certifications 📜</h2>
      <p className="cert-description">
        I have successfully completed several online certifications that strengthen my skills in productivity, programming, and networking technologies.
      </p>
      <div className="certificate-grid">
        <div className="cert-card">
          <img src={excel} alt="MS Excel" />
          <p>Work Smarter with Microsoft Excel</p>
        </div>
        <div className="cert-card">
          <img src={word} alt="MS Word" />
          <p>Work Smarter with Microsoft Word</p>
        </div>
        <div className="cert-card">
          <img src={packet} alt="CISCO Packet" />
          <p>Introducing z/OS UNIX System Services</p>
        </div>
        <div className="cert-card">
          <img src={python} alt="Python" />
          <p>Introduction to Python</p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
