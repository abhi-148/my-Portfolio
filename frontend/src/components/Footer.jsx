import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <p>
        © {new Date().getFullYear()} Abhishek Kumar — Built with React & Passion
      </p>
    </footer>
  );
}
