// import "../styles/Skills.css";
// import html from "../assets/icons/html.png";
// import css from "../assets/icons/css.png";
// import js from "../assets/icons/js.png";
// import react from "../assets/icons/react.png";
// import node from "../assets/icons/nodejs.png";
// import mongo from "../assets/icons/mongo.png";
// import sql from "../assets/icons/sql.jpg";
// import git from "../assets/icons/git.jpg";
// import cpp from "../assets/icons/c++.jpg";
// import csharp from "../assets/icons/csharp.png";

// function Skills() {
//   return (
//     <section className="skills-section" id="skills">
//       <h2 className="section-title">Skills 💻</h2>
//       <div className="skills-grid">
//         <img src={html} alt="HTML" />
//         <img src={css} alt="CSS" />
//         <img src={js} alt="JavaScript" />
//         <img src={react} alt="React" />
//         <img src={node} alt="Node.js" />
//         <img src={mongo} alt="MongoDB" />
//         <img src={sql} alt="My SQL" />
//         <img src={git} alt="Git" />
//         <img src={cpp} alt="C++" />
//         <img src={csharp} alt="C#" />
//       </div>
//     </section>
//   );
// }

// export default Skills;
import "../styles/Skills.css";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/nodejs.png";
import mongo from "../assets/icons/mongo.png";
import sql from "../assets/icons/sql.jpg";
import git from "../assets/icons/git.jpg";
import cpp from "../assets/icons/c++.jpg";
import csharp from "../assets/icons/csharp.png";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills 💻</h2>
      <p>I am proficient in working with these technologies and tools for development.</p>
      <br />
      <div className="skills-grid">
        <div className="skill-card"><img src={html} alt="HTML" /><p>HTML</p></div>
        <div className="skill-card"><img src={css} alt="CSS" /><p>CSS</p></div>
        <div className="skill-card"><img src={js} alt="JavaScript" /><p>JavaScript</p></div>
        <div className="skill-card"><img src={react} alt="React" /><p>React</p></div>
        <div className="skill-card"><img src={node} alt="Node.js" /><p>Node.js</p></div>
        <div className="skill-card"><img src={mongo} alt="MongoDB" /><p>MongoDB</p></div>
        <div className="skill-card"><img src={sql} alt="MySQL" /><p>MySQL</p></div>
        <div className="skill-card"><img src={git} alt="Git" /><p>Git</p></div>
        <div className="skill-card"><img src={cpp} alt="C++" /><p>C++</p></div>
        <div className="skill-card"><img src={csharp} alt="C#" /><p>C#</p></div>
      </div>
    </section>
  );
}

export default Skills;
