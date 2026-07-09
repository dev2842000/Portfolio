import React, {useContext, useState, useEffect} from "react";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import GooeyNav from "../gooeyNav/GooeyNav";

const SECTIONS = ["hero", "about", "experience", "projects", "education", "contact"];
const LABELS   = ["Home", "About", "Experience", "Projects", "Education", "Contact"];

function Header({menuOpen, setMenuOpen}) {
  const {isDark, changeTheme} = useContext(StyleContext);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = SECTIONS.indexOf(e.target.id);
          if (idx !== -1) setActiveIdx(idx);
        }
      }),
      {threshold: 0.2, rootMargin: "-60px 0px -40% 0px"}
    );
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="scroll-progress" id="scroll-progress" />
        <a href="#hero" className="nav-logo">DK</a>
        <GooeyNav />
        <div className="nav-right">
          <button className="theme-btn" onClick={changeTheme} aria-label="Toggle theme">
            {isDark ? "☀️" : "🌙"}
          </button>
          <button
            className={`ham-btn${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {SECTIONS.map((id, i) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeIdx === i ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {LABELS[i]}
          </a>
        ))}
      </div>
    </>
  );
}
export default Header;
