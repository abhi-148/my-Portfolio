import "./Home.css";

export default function Home({ setPage }) {
  return (
    <section className="home-section">
      {/* SECTION INDICATOR */}
      <div className="section-indicator">
        <span className="dot"></span>
        <span className="line"></span>
      </div>

      <div className="home-container">
        {/* LEFT CONTENT */}
        <div className="home-text">
          <h1 className="home-title">
            <span className="reveal delay-1">Hi,</span>
            <br />
            <span className="reveal delay-2">I’m</span>{" "}
            <span className="reveal delay-3 highlight">
              Abhishek Kumar
            </span>
          </h1>

          <h3 className="home-role reveal delay-4">
            Frontend Developer • MERN Stack
          </h3>

          <p className="home-desc reveal delay-5">
            I design and build scalable, production-ready web applications
            focused on clean UI, smooth user experience, and strong performance.
            My work includes dashboards, ERP systems, and modern frontend
            interfaces built with real-world use cases in mind.
          </p>

          <div className="home-actions reveal delay-6">
            <button
              className="btn-primary"
              onClick={() => setPage(3)} // Projects index
            >
              View Work
            </button>

            <button
              className="btn-secondary"
              onClick={() => setPage(5)} // Contact index
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="home-image reveal delay-4">
          <div className="image-glow"></div>
          <img src="/profile.png" alt="Abhishek Kumar" />
        </div>
      </div>
    </section>
  );
}
