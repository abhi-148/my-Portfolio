import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      {/* HEADER */}
      <div className="contact-header">
        <h2>
          Get In <span>Touch</span>
        </h2>
        <p>
          Have a project idea, collaboration, or opportunity?
          Let’s connect and build something great together.
        </p>
      </div>

      {/* CONTENT */}
      <div className="contact-wrapper">
        {/* FORM */}
        <form className="contact-form">
          <h3>Send a Message</h3>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="5" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* INFO */}
        <div className="contact-info">
          <h3>Connect With Me</h3>

          <a href="mailto:abhipandeypandey646@gmail.com">
            📧 abhipandeypandey646@gmail.com
          </a>

          <a href="https://wa.me/8400221056" target="_blank">
            📱 WhatsApp Chat
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-kumar-25b756260/"
            target="_blank"
          >
            💼 LinkedIn Profile
          </a>

          <a href="https://github.com/abhi-148" target="_blank">
            🧑‍💻 GitHub Profile
          </a>

          <a href="/resume.pdf" download className="resume-btn">
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
