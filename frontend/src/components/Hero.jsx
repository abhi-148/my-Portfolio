import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        {/* LEFT */}
        <div>
          <h1 className="hero-title">
            Hi, <br />
            I’m <span>Abhishek Kumar</span>
          </h1>

          <p className="hero-role">
            Frontend Developer • MERN Stack
          </p>

          <p className="hero-desc">
            I design and build scalable, real-world web applications that solve
            practical problems and perform reliably in production environments.
          </p>

          <p className="hero-desc">
            My work includes modern dashboards, ERP systems, management portals,
            and interactive frontend experiences with a strong focus on clean UI,
            optimized performance, maintainable code structure, and
            production-ready development practices.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">View Projects</button>
            <button className="btn-secondary">Contact Me</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-img-box">
          <img src={profile} alt="Abhishek Kumar" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
