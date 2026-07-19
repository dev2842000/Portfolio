import React from "react";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";

export default function WorkExperience() {
  if (!workExperiences.display) return null;
  return (
    <section id="experience">
      <div className="si">
        <p className="slabel reveal">Career</p>
        <h2 className="stitle reveal">Experience</h2>
        <div className="timeline reveal">
          {workExperiences.experience.map((exp, i) => (
            <div key={i} className="exp-card">
              <div className="exp-head">
                <img src={exp.companylogo} alt={exp.company} className="exp-logo" loading="lazy" />
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-co">{exp.company}</div>
                  <div className="exp-date">{exp.date}</div>
                </div>
              </div>
              <p className="exp-desc">{exp.desc}</p>
              {exp.descBullets && (
                <ul className="exp-bul">
                  {exp.descBullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
