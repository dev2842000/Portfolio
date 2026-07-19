import React from "react";

const tiles = [
  {
    icon: "fas fa-dumbbell",
    label: "Outside the Code",
    title: "Training & Recomposition",
    body: "Building in the gym the same way I build software — consistent reps, measured progress, no shortcuts. Body recomposition: losing fat, gaining strength, tracking everything.",
    links: [],
  },
  {
    icon: "fas fa-tools",
    label: "Side Projects",
    title: "Always Building Something",
    body: "If I'm not shipping at work, I'm shipping tools I actually want to exist.",
    links: [
      {name: "Multi-Agent PR Reviewer", url: "https://github.com/dev2842000/multi-agent-pr-reviewer"},
      {name: "BlurShield", url: "https://github.com/dev2842000/blurshield"},
      {name: "Jira Autopilot", url: "https://github.com/dev2842000/jira-autopilot"},
    ],
  },
  {
    icon: "fas fa-language",
    label: "Language Learning",
    title: "日本語 — JLPT N5",
    body: "Studying Japanese because hard things done consistently compound. Currently at N5, working toward N4. Language learning is just another system to iterate on.",
    links: [],
  },
];

export default function BeyondCode() {
  return (
    <section id="beyond">
      <div className="si">
        <p className="slabel reveal">Beyond the Code</p>
        <h2 className="stitle reveal">What I Do When I'm Not Shipping</h2>
        <div className="btc-grid">
          {tiles.map((t, i) => (
            <div key={i} className="btc-card reveal">
              <div className="btc-icon">
                <i className={t.icon} />
              </div>
              <p className="btc-label">{t.label}</p>
              <h3 className="btc-title">{t.title}</h3>
              <p className="btc-body">{t.body}</p>
              {t.links.length > 0 && (
                <ul className="btc-links">
                  {t.links.map((l, j) => (
                    <li key={j}>
                      <a href={l.url} target="_blank" rel="noreferrer">
                        <i className="fab fa-github" /> {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
