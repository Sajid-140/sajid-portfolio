// import '../styles/Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">Sajid Ali</div>
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#certifications">Certifications</a></li>
//         <li><a href="#leadership">Leadership</a></li>
//         <li><a href="#contact">Contact</a></li>
//         <li>
//           <a
//             href="/Sajid_Ali_CV.pdf"
//             download
//             className="resume-button"
//           >
//             Resume
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Sajid Ali</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#certifications" onClick={toggleMenu}>Certifications</a></li>
        <li><a href="#leadership" onClick={toggleMenu}>Leadership</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        <li>
          <a href="/Sajid_Ali_CV.pdf" download className="resume-button" onClick={toggleMenu}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;