import React from "react";
import "./Greeting.scss";
import {greeting, socialMediaLinks} from "../../portfolio";
import HeroCanvas from "../../components/heroCanvas/HeroCanvas";

export default function Greeting() {
  if (!greeting.displayGreeting) return null;
  return (
    <section id="hero">
      <div className="hero-overlay" />
      <div className="hero-grid-bg" />
      <div className="hero-grad" />
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="h-dot" />
            Open to opportunities
          </div>
          <h1 className="hero-name">Hi, I'm Dev</h1>
          <p className="hero-role">Full Stack (AI-Focused) · 3.5+ Years</p>
          <p className="hero-sub">{greeting.subTitle}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-p">Contact me</a>
            {greeting.resumeLink && (
              <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-o">Resume ↗</a>
            )}
          </div>
          <div className="hero-socials">
            {socialMediaLinks.linkedin && (
              <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="soc" title="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
            )}
            <a href="https://github.com/dev2842000" target="_blank" rel="noopener noreferrer" className="soc" title="GitHub">
              <i className="fab fa-github" />
            </a>
            {socialMediaLinks.gmail && (
              <a href={`mailto:${socialMediaLinks.gmail}`} className="soc" title="Email">
                <i className="fas fa-envelope" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="hero-canvas-wrap"><HeroCanvas /></div>

    </section>
  );
}
