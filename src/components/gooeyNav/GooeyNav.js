import React, {useRef, useEffect} from "react";

const LINKS = [
  {label: "Home",       href: "#hero"},
  {label: "About",      href: "#about"},
  {label: "Experience", href: "#experience"},
  {label: "Projects",   href: "#projects"},
  {label: "Education",  href: "#education"},
  {label: "Contact",    href: "#contact"},
];

const SECTION_IDS = ["hero", "about", "experience", "projects", "education", "contact"];

export default function GooeyNav() {
  const containerRef = useRef(null);
  const listRef      = useRef(null);
  const filterRef    = useRef(null);
  const textRef      = useRef(null);
  const activeIdxRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const navList   = listRef.current;
    const filterEl  = filterRef.current;
    const textEl    = textRef.current;
    if (!container || !navList || !filterEl || !textEl) return;

    const noise = (n = 1) => n / 2 - Math.random() * n;
    const getXY = (dist, idx, total) => {
      const a = ((360 + noise(8)) / total) * idx * (Math.PI / 180);
      return [dist * Math.cos(a), dist * Math.sin(a)];
    };

    const PC = 12, PD = [90, 10], PR = 100, AT = 600, TV = 300;
    const COLS = [1, 2, 3, 1, 2, 3, 1, 4];

    const makeParticles = (el) => {
      el.style.setProperty("--time", `${AT * 2 + TV}ms`);
      el.classList.remove("active");
      for (let i = 0; i < PC; i++) {
        const t   = AT * 2 + noise(TV * 2);
        const rot = noise(PR / 10);
        const p = {
          start: getXY(PD[0], PC - i, PC),
          end:   getXY(PD[1] + noise(7), PC - i, PC),
          time:  t,
          scale: 1 + noise(0.2),
          color: COLS[Math.floor(Math.random() * COLS.length)],
          rotate: rot > 0 ? (rot + PR / 20) * 10 : (rot - PR / 20) * 10,
        };
        setTimeout(() => {
          const par = document.createElement("span");
          const pt  = document.createElement("span");
          par.classList.add("particle");
          par.style.setProperty("--start-x", `${p.start[0]}px`);
          par.style.setProperty("--start-y", `${p.start[1]}px`);
          par.style.setProperty("--end-x",   `${p.end[0]}px`);
          par.style.setProperty("--end-y",   `${p.end[1]}px`);
          par.style.setProperty("--time",    `${p.time}ms`);
          par.style.setProperty("--scale",   `${p.scale}`);
          par.style.setProperty("--color",   `var(--color-${p.color}, white)`);
          par.style.setProperty("--rotate",  `${p.rotate}deg`);
          pt.classList.add("point");
          par.appendChild(pt);
          el.appendChild(par);
          requestAnimationFrame(() => el.classList.add("active"));
          setTimeout(() => { try { el.removeChild(par); } catch {} }, t);
        }, 30);
      }
    };

    const updatePos = (li) => {
      const cr = container.getBoundingClientRect();
      const lr = li.getBoundingClientRect();
      const s  = {
        left:   `${lr.x - cr.x}px`,
        top:    `${lr.y - cr.y}px`,
        width:  `${lr.width}px`,
        height: `${lr.height}px`,
      };
      Object.assign(filterEl.style, s);
      Object.assign(textEl.style, s);
      textEl.innerText = li.innerText;
    };

    const items = Array.from(navList.querySelectorAll("li"));

    // Init first item
    setTimeout(() => {
      if (items[0]) {
        updatePos(items[0]);
        textEl.classList.add("active");
      }
    }, 120);

    const setActive = (idx) => {
      if (activeIdxRef.current === idx) return;
      items.forEach(i => i.classList.remove("active"));
      items[idx].classList.add("active");
      activeIdxRef.current = idx;
      updatePos(items[idx]);
      filterEl.querySelectorAll(".particle").forEach(p => { try { filterEl.removeChild(p); } catch {} });
      textEl.classList.remove("active");
      void textEl.offsetWidth; // force reflow
      textEl.classList.add("active");
      makeParticles(filterEl);
    };

    items.forEach((li, idx) => {
      li.addEventListener("click", () => setActive(idx));
    });

    // ResizeObserver keeps pill aligned
    const ro = new ResizeObserver(() => {
      if (items[activeIdxRef.current]) updatePos(items[activeIdxRef.current]);
    });
    ro.observe(container);

    // Scroll-based section tracking
    const sectionIO = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = SECTION_IDS.indexOf(e.target.id);
          if (idx !== -1) setActive(idx);
        }
      }),
      {threshold: 0.2, rootMargin: "-60px 0px -40% 0px"}
    );
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) sectionIO.observe(el);
    });

    return () => {
      ro.disconnect();
      sectionIO.disconnect();
    };
  }, []);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <div className="gooey-nav-inner">
        <ul ref={listRef}>
          {LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text"   ref={textRef}   />
    </div>
  );
}
