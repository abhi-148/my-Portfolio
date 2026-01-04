import { useEffect } from "react";
import "./Projects.css";

export default function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  const projects = [
    {
      title: "Student ERP Management System",
      desc: "Complete ERP solution for students & admins with authentication, attendance, fees, results and dashboards.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      img: "/erp.png",
    },
    {
      title: "Employee Leave Management System",
      desc: "Web system to manage employee leave requests with approval workflow and admin dashboard.",
      tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
      img: "/leave.png",
    },
    {
      title: "E-Commerce Platform",
      desc: "Modern e-commerce website with cart, authentication, product listing and responsive UI.",
      tech: ["React", "JavaScript", "CSS"],
      img: "/ecommerce.png",
    },
    {
      title: "Weather Application",
      desc: "Real-time weather forecasting app using public APIs with fast response and clean UI.",
      tech: ["JavaScript", "API", "HTML", "CSS"],
      img: "/weather.png",
    },
    {
      title: "News & Money Dashboard",
      desc: "Dashboard showing latest news and financial updates with real-time data.",
      tech: ["JavaScript", "API", "HTML", "CSS"],
      img: "/news.png",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>
          My <span>Projects</span>
        </h2>
        <p>Real-world applications I have designed and developed</p>
      </div>

      {/* 🔑 IMPORTANT WRAPPER */}
      <div className="projects-scroll">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-img">
                <img src={p.img} alt={p.title} />
              </div>

              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="tech-stack">
                {p.tech.map((t, idx) => (
                  <span className="tech" key={idx}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
