import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* HEADER */}
        <div className="about-header">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            A deeper look into who I am, how I think, and how I build modern
            frontend applications.
          </p>
        </div>

        {/* CONTENT */}
        <div className="about-content">
          <p>
            I am a <strong>Computer Science student</strong> and a passionate{" "}
            <strong>Frontend Developer</strong> with strong fundamentals in{" "}
            <strong>C, C++, JavaScript</strong>, and modern frameworks like{" "}
            <strong>React.js</strong>. I specialize in building clean,
            interactive, and performance-driven user interfaces using the{" "}
            <strong>MERN stack</strong>.
          </p>

          <p>
            Over time, I have worked on real-world projects such as{" "}
            <strong>
              Student ERP systems, Employee Leave Management platforms,
              E-commerce websites, Weather applications,
            </strong>{" "}
            and <strong>News & Money dashboards</strong>. These projects helped
            me understand how production-level frontend systems are designed,
            optimized, and scaled.
          </p>

          <p>
            My primary focus is always on writing{" "}
            <strong>clean, structured, and reusable frontend code</strong> while
            ensuring smooth user experience, fast rendering, and responsive
            layouts. I believe great UI combined with strong logic creates
            products users genuinely enjoy using.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="about-highlights">
          <div className="highlight-card">
            <h3>Frontend Development</h3>
            <p>
              Building modern, responsive, and interactive interfaces using
              React.js, JavaScript, HTML, and CSS.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Clean UI</h3>
            <p>
              Minimal, modern, and user-focused design that improves clarity,
              usability, and visual appeal.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Performance</h3>
            <p>
              Optimized rendering, efficient logic, and smooth animations for
              fast and seamless user experiences.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Scalable Code</h3>
            <p>
              Modular, maintainable, and production-ready architecture that
              grows easily with the product.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
