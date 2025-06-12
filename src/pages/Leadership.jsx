import "../styles/Leadership.css";
import SciBiz from "../assets/leadership/SciBiz.jpg";
import HCS from "../assets/leadership/HCS.jpg";
import HSC from "../assets/leadership/HSC.jpg";

function Leadership() {
  return (
    <section className="leadership-section" id="leadership">
      <h2 className="section-title">Leadership Experience 🏅</h2>
      <p className="lead-description">
        I actively participated in various student societies and events, demonstrating leadership, coordination, and event management skills throughout my academic journey.
      </p>
      <div className="leadership-grid">
        <div className="lead-card">
          <img src={SciBiz} alt="Leadership Role 1" />
          <p>Event Managment Head - SciBiz Society, UOG</p>
        </div>
        <div className="lead-card">
          <img src={HCS} alt="Leadership Role 2" />
          <p>Alumni Relation Officer - Hayatian Computing Society, UOG</p>
        </div>
        <div className="lead-card">
          <img src={HSC} alt="Leadership Role 3" />
          <p>Sport Represtative - Hyatian Sports Club, UOG</p>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
