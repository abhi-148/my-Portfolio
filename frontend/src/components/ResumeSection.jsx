import "./ResumeSection.css";

export default function ResumeSection() {
  return (
    <section className="resume-page">
      <div className="resume-container">

        {/* HEADER */}
        <header className="resume-header">
          <h1>
            My <span>Resume</span>
          </h1>
          <p>Internships · Hackathons · Certifications</p>
        </header>

        {/* INTERNSHIP */}
        <section className="resume-block">
          <h2>Internship</h2>

          <div className="resume-card">
            <h3>Sparkes to Ideas</h3>
            <p className="sub">
              Web Designer Intern · May 2025 – Jun 2025
            </p>
            <ul>
              <li>Worked with HTML, CSS, JavaScript & Bootstrap</li>
              <li>Designed responsive and modern UI layouts</li>
              <li>Improved UI/UX, debugging & problem-solving skills</li>
              <li>Hands-on experience with real client projects</li>
            </ul>
          </div>
        </section>

        {/* HACKATHONS */}
        <section className="resume-block">
          <h2>Hackathons & Competitions</h2>

          <div className="resume-card highlight">
            <h3>PU Code Hackathon 1.0</h3>
            <p className="sub">Parul University · Participation</p>
          </div>

          <div className="resume-card highlight">
            <h3>PU Code Hackathon 2.0</h3>
            <p className="sub">Parul University · Participation</p>
          </div>

          <div className="resume-card highlight">
            <h3>AugustCode Solutions Pvt. Ltd. Hackathon</h3>
            <p className="sub">Surat · Top 15 Teams</p>
          </div>

          <div className="resume-card highlight">
            <h3>National Level Hackathon (Navonmesh)</h3>
            <p className="sub">Raipur · Top 30 Teams</p>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="resume-block">
          <h2>Certifications</h2>

          <div className="resume-card">
            <h3>JavaScript Certification</h3>
            <ul>
              <li>Core JavaScript concepts & ES6+</li>
              <li>DOM manipulation & event handling</li>
              <li>Async programming & API integration</li>
            </ul>
          </div>

          <div className="resume-card">
            <h3>Power BI Certification</h3>
            <ul>
              <li>Data modeling & interactive dashboards</li>
              <li>Advanced analytics & visualization</li>
            </ul>
          </div>

          <div className="resume-card">
            <h3>SAP – Advance Course on Emerging Technologies</h3>
            <p className="sub">
              Machine Learning · IoT · Deep Learning · SAP ABAP · SAP BTP
            </p>
          </div>
        </section>

        {/* DOWNLOAD */}
        <div className="resume-download">
          <a href="/resume.pdf" download>
            Download Resume (PDF)
          </a>
        </div>

      </div>
    </section>
  );
}
