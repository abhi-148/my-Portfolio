import { useEffect, useRef, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";

const sections = ["home", "about", "skills", "projects", "resume", "contact"];

export default function App() {
  const [index, setIndex] = useState(0);
  const isScrolling = useRef(false);

  const scrollTo = (i) => {
    if (i < 0 || i >= sections.length) return;
    if (isScrolling.current) return;

    isScrolling.current = true;
    setIndex(i);

    setTimeout(() => {
      isScrolling.current = false;
    }, 900);
  };

  useEffect(() => {
    const onWheel = (e) => {
      if (sections[index] === "resume") return; // ⛔ resume handles its own scroll

      if (e.deltaY > 50) scrollTo(index + 1);
      if (e.deltaY < -50) scrollTo(index - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [index]);

  return (
    <div className="app-wrapper">
      <Navbar
        current={sections[index]}
        setPage={(p) => scrollTo(sections.indexOf(p))}
      />

      <div
        className="sections"
        style={{ transform: `translateY(-${index * 100}vh)` }}
      >
        <section className="section"><Home setPage={scrollTo} /></section>
        <section className="section"><About /></section>
        <section className="section"><Skills /></section>
        <section className="section"><Projects /></section>

        {/* 🔥 FIXED RESUME */}
        <section className="section resume-section">
          <ResumeSection />
        </section>

        <section className="section"><Contact /></section>
      </div>
    </div>
  );
}
