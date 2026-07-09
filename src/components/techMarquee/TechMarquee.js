import React from "react";
import "./TechMarquee.scss";

const ITEMS = [
  {icon: "fab fa-react", name: "React.js"},
  {icon: "fab fa-node", name: "Node.js"},
  {icon: "fab fa-python", name: "Python"},
  {icon: "fas fa-robot", name: "Claude API"},
  {icon: "fab fa-js", name: "TypeScript"},
  {icon: "fas fa-database", name: "PostgreSQL"},
  {icon: "fas fa-server", name: "Redis"},
  {icon: "fab fa-aws", name: "AWS"},
  {icon: "fab fa-docker", name: "Docker"},
  {icon: "fas fa-brain", name: "LLMs"},
  {icon: "fab fa-git-alt", name: "Git"},
  {icon: "fas fa-plug", name: "Segment"},
];

// ponytail: doubled array for seamless CSS loop — no JS scrolling needed
const doubled = [...ITEMS, ...ITEMS];

export default function TechMarquee() {
  return (
    <div className="logostrip">
      <div className="logostrip-track">
        {doubled.map((item, i) => (
          <span key={i} className="logostrip-item">
            <i className={item.icon} aria-hidden="true" />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
