import { useState } from "react";
import "../styles/Projects.css";
import dairy from "../assets/project_screens/dairy.jpg";
import car from "../assets/project_screens/car-showroom.jpg";
import city from "../assets/project_screens/city-network.png";
import hospital from "../assets/project_screens/hospital.jpg";
import event from "../assets/project_screens/event.jpg";
import water from "../assets/project_screens/water-level.jpg";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const projectDetails = {
    car: {
      title: "Car Showroom Management",
      technologies: "Assembly Language",
      summary: "A system developed in Assembly Language for managing car inventory and showroom operations.",
      details: "This project involved low-level programming to simulate car selection, price handling, and customer records.",
    },
    hospital: {
      title: "Hospital Management",
      technologies: "C# Desktop Application",
      summary: "Streamlined hospital operations using patient, staff, and appointment management.",
      details: "Built with Windows Forms, this software supports login, CRUD operations, and report generation.",
    },
    city: {
      title: "City Network System",
      technologies: "Cisco Packet Tracer",
      summary: "Simulated a city-wide interconnected network design.",
      details: "Used routers, switches, and servers to build an interconnected network that supports scalable communication.",
    },
    event: {
      title: "Event Management System",
      technologies: "C# Desktop App",
      summary: "Ticketing and scheduling system for managing public/private events.",
      details: "Includes user registration, event scheduling, and seat booking features.",
    },
    water: {
      title: "Water Level Indicator",
      technologies: "Hardware, Arduino",
      summary: "Detects and displays water levels using sensors and buzzers.",
      details: "Helps manage water usage by alerting when tank is full or empty via LED & buzzer systems.",
    },
  };

  const handleReadMore = (projectKey) => {
    setSelectedProject(projectDetails[projectKey]);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects 💼</h2>
      <p>I have successfully completed these projects, gaining valuable hands-on experience and practical skills in real-world development.</p>
      <div className="projects-grid">
        <div className="project-card">
          <img src={dairy} alt="DairyEase" />
          <h3>DairyEase</h3>
          <p>A React and Node.js web application developed for dairy farm record management.</p>
          <button className="btn" onClick={() => setShowVideo(true)}>View Demo</button>
        </div>

        {Object.entries(projectDetails).map(([key, project]) => (
          <div key={key} className="project-card">
            <img src={eval(key)} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <button className="btn" onClick={() => handleReadMore(key)}>Read More</button>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="modal-overlay" onClick={() => setShowVideo(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={() => setShowVideo(false)}>&times;</span>
        <h3 className="modal-title">DairyEase Demo</h3>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/BnojG3DZcBE?si=SxjDn3hYj8YBFzO9"
        title="DairyEase Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>


    </div>
  </div>
      )}

      {/* Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal detail-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.title}</h3>
            <p><strong>Technologies:</strong> {selectedProject.technologies}</p>
            <p><strong>Summary:</strong> {selectedProject.summary}</p>
            <p><strong>Details:</strong> {selectedProject.details}</p>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>x</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
