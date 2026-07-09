import React from "react";
import {skillsSection} from "../../portfolio";
import aboutPhoto from "../../assets/images/about-me.JPG";

export default function About() {
  if (!skillsSection.display) return null;
  return (
    <section id="about">
      <div className="si">
        <div className="about-layout">
          <div className="about-img-col reveal-l">
            <div className="about-img-frame">
              <img src={aboutPhoto} alt="Dev Kumar" />
            </div>
            <div className="about-img-accent" />
            <div className="about-img-accent2" />
          </div>
          <div className="about-text-col reveal-r">
            <p className="slabel">Who I Am</p>
            <h2 className="stitle">About Me</h2>
            <p className="ssub">Product engineer who owns problems end-to-end</p>
            {skillsSection.skills.map((skill, i) => (
              <p key={i} className="sbullet">{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
