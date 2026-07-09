import React from "react";
import "./Skills.scss";
import {skillsSection, skillCategories} from "../../portfolio";

export default function Skills() {
  if (!skillsSection.display) return null;
  return (
    <section id="skills">
      <div className="si">
        <p className="slabel reveal">Tech Stack</p>
        <h2 className="stitle reveal">Skills</h2>
        <div className="skill-cats reveal">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-cat">
              <span className="skill-cat-label">{cat.label}</span>
              <div className="skill-tags">
                {cat.tags.map((tag, j) => (
                  <span key={j} className="stag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
