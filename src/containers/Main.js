import React, {useEffect, useState, useRef} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import TechMarquee from "../components/techMarquee/TechMarquee";
import About from "./about/About";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Education from "./education/Education";
import BeyondCode from "./beyondCode/BeyondCode";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const [isDark, setIsDark] = useLocalStorage(
    "isDark",
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false
  );
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (splashScreen.enabled) {
      const t = setTimeout(() => setIsShowingSplashAnimation(false), splashScreen.duration);
      return () => clearTimeout(t);
    }
  }, []);


  // Scroll: progress bar + back-to-top
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const btn = document.getElementById("back-top");
    const onScroll = () => {
      const h = document.documentElement;
      if (bar) bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
      if (btn) btn.classList.toggle("visible", h.scrollTop > 400);
    };
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      {threshold: 0.08}
    );
    const els = document.querySelectorAll(".reveal,.reveal-l,.reveal-r");
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [isShowingSplashAnimation]);

  // Cursor trail — skip on touch devices
  useEffect(() => {
    if (window.matchMedia("(hover:none)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const trail = [];
    const MAX = 28;
    let mx = -999, my = -999, moved = false;
    const onMove = e => { mx = e.clientX; my = e.clientY; moved = true; };
    window.addEventListener("mousemove", onMove, {passive: true});
    const colors = ["rgba(255,255,255,", "rgba(220,230,255,", "rgba(200,215,255,"];
    let raf;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.push({x: mx, y: my, life: 1, r: 5 + Math.random() * 4, col: colors[Math.floor(Math.random() * colors.length)]});
      if (trail.length > MAX) trail.shift();
      trail.forEach(p => {
        p.life -= 0.042; p.r *= 0.97;
        if (p.life <= 0) return;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.col + (p.life * 0.5) + ")";
        ctx.shadowColor = p.col + "0.8)"; ctx.shadowBlur = 12;
        ctx.fill(); ctx.shadowBlur = 0;
      });
      if (moved) {
        ctx.beginPath(); ctx.arc(mx, my, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.shadowColor = "rgba(255,255,255,0.7)"; ctx.shadowBlur = 10;
        ctx.fill(); ctx.shadowBlur = 0;
      }
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const changeTheme = () => setIsDark(!isDark);

  return (
    <div className={`port-root ${isDark ? "dark-mode" : "light-mode"}`}>
      <StyleProvider value={{isDark, changeTheme}}>
        <canvas className="cursor-canvas" ref={canvasRef} />
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Greeting />
            <TechMarquee />
            <About />
            <Skills />
            <WorkExperience />
            <StartupProject />
            <Education />
            <BeyondCode />
            <Contact />
            <Footer />
            <button className="back-top" id="back-top" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
              <i className="fas fa-chevron-up" />
            </button>
          </>
        )}
      </StyleProvider>
    </div>
  );
};
export default Main;
