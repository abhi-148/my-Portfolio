import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ current, setPage }) {
  const menu = ["home", "about", "skills", "projects", "resume", "contact"];
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    setPage(item);
    setOpen(false); // mobile menu close
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo" onClick={() => handleClick("home")}>
        <span className="logo-name">Abhishek</span>
        <span className="logo-dot">.</span>
        <span className="logo-dev">dev</span>
      </div>

      {/* DESKTOP MENU */}
      <ul className="nav-links">
        {menu.map((item) => (
          <li
            key={item}
            className={current === item ? "active" : ""}
            onClick={() => handleClick(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        {menu.map((item) => (
          <div
            key={item}
            className={`mobile-item ${
              current === item ? "active" : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </div>
        ))}
      </div>
    </nav>
  );
}
