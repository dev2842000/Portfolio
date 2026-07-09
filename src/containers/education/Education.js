import React from "react";
import "./Education.scss";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (!educationInfo.display) return null;
  return (
    <section id="education">
      <div className="si">
        <p className="slabel reveal">Background</p>
        <h2 className="stitle reveal">Education</h2>
        <div className="edu-grid reveal">
          {educationInfo.schools.map((school, i) => (
            <div key={i} className="edu-card">
              <div className="edu-head">
                <img src={school.logo} alt={school.schoolName} className="edu-logo" />
                <div>
                  <div className="edu-school">{school.schoolName}</div>
                  <div className="edu-deg">{school.subHeader}</div>
                  <div className="edu-date">{school.duration}</div>
                </div>
              </div>
              <p className="edu-desc">{school.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
