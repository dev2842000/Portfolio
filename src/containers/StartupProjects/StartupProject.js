import React from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";

export default function StartupProject() {
  if (!bigProjects.display) return null;
  return (
    <section id="projects">
      <div className="si">
        <p className="slabel reveal">Work</p>
        <h2 className="stitle reveal">Projects</h2>
        <p className="ssub reveal">AI agents, fintech platforms, and personal projects</p>
        <div className="proj-grid reveal">
          {bigProjects.projects.map((project, i) => (
            <div key={i} className="proj-card" onClick={() => project.footerLink?.[0]?.url && window.open(project.footerLink[0].url, "_blank")}>
              {project.image && <img src={project.image} alt={project.projectName} className="proj-img" loading="lazy" />}
              <div className="proj-body">
                <div className="proj-name">{project.projectName}</div>
                <p className="proj-desc">{project.projectDesc}</p>
                {project.footerLink?.map((link, j) => (
                  <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="proj-link" onClick={e => e.stopPropagation()}>
                    {link.name} ↗
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
