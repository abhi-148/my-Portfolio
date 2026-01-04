import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "HTML5", level: 95, icon: <FaHtml5 /> },
  { name: "CSS / Tailwind", level: 90, icon: <SiTailwindcss /> },
  { name: "JavaScript", level: 92, icon: <FaJs /> },
  { name: "React.js", level: 90, icon: <FaReact /> },
  { name: "Node.js", level: 80, icon: <FaNodeJs /> },
  { name: "MongoDB", level: 78, icon: <SiMongodb /> },
  { name: "C", level: 85, icon: <SiCplusplus /> },
  { name: "C++", level: 88, icon: <SiCplusplus /> },
  { name: "Git & GitHub", level: 90, icon: <FaGitAlt /> },
];

export default function Skills() {
  return (
    <section className="skills-page">
      <div className="skills-wrapper">
        <h1 className="skills-title">
          My <span>Technical Skills</span>
        </h1>

        <p className="skills-subtitle">
          Technologies & tools I use to build scalable, high-performance,
          production-ready applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="skill-head">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <span className="skill-percent">{skill.level}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-hint">
          ⬅️ / ➡️ Arrow Keys • Mouse Scroll to navigate
        </div>
      </div>
    </section>
  );
}
