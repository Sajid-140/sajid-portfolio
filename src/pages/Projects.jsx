import "../styles/Projects.css";
import dairy from "../assets/project_screens/dairyease.jpeg";
import car from "../assets/project_screens/car-showroom.jpg";
import city from "../assets/project_screens/city-network.png";
import hospital from "../assets/project_screens/hospital.jpg";
import tickets from "../assets/project_screens/ticket.jpg";
import attendance from "../assets/project_screens/employee.jpg";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects 💼</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={dairy} alt="DairyEase" />
          <h3>DairyEase</h3>
          <p>A web application using React and Node.js to manage dairy records effectively.</p>
          <a href="#" className="btn">View Demo</a>
        </div>
        <div className="project-card">
          <img src={hospital} alt="Hospital Management" />
          <h3>Hospital Management</h3>
          <p>A C# based desktop application for managing hospital operations.</p>
          <a href="#" className="btn">View Demo</a>
        </div>
        <div className="project-card">
          <img src={tickets} alt="Ticket Booking System" />
          <h3>Ticket Booking System</h3>
          <p>A C# based desktop application for booking tickets efficiently.</p>
          <a href="#" className="btn">View Demo</a>
        </div>
        <div className="project-card">
          <img src={attendance} alt="Employee Attendence System" />
          <h3>Employee Attendance System</h3>
          <p>A C# based desktop application for marking Attendance of employees efficiently.</p>
          <a href="#" className="btn">View Demo</a>
        </div>
        <div className="project-card">
          <img src={city} alt="City Network System" />
          <h3>City Network System</h3>
          <p>Simulated using Cisco Packet Tracer, demonstrating a city-wide network.</p>
          <a href="#" className="btn">View Demo</a>
        </div>
        <div className="project-card">
          <img src={car} alt="Car Showroom Management" />
          <h3>Car Showroom Management</h3>
          <p>Developed in Assembly Language, showcasing a car showroom management system.</p>
          <a href="#" className="btn">View Demo</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
