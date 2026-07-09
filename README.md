<div align="center">

<br/>

# Dev Kumar · Portfolio

**Product Engineer &nbsp;·&nbsp; AI Integration &nbsp;·&nbsp; 3+ Years**

<br/>

[![Live Site](https://img.shields.io/badge/🌐%20Live%20Site-dev--kumar.netlify.app-0052CC?style=for-the-badge&logo=netlify&logoColor=white)](https://dev-kumar.netlify.app)&nbsp;&nbsp;
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sde--dev--kumar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sde-dev-kumar/)&nbsp;&nbsp;
[![Gmail](https://img.shields.io/badge/Email-dev69440@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dev69440@gmail.com)&nbsp;&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-dev2842000-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dev2842000)

<br/>

> *I build full-stack products that ship to real users — and lately, products that think.*

<br/>

</div>

---

## Features

| | |
|---|---|
| **Three.js hero** | Fibonacci particle sphere (2 800 pts) with camera-parallax on mouse movement |
| **GooeyNav** | CSS blur+contrast morphing pill indicator that snaps to the active section |
| **Cursor trail** | Canvas particle trail — disabled automatically on touch devices |
| **Scroll reveal** | IntersectionObserver fade-ins on every section |
| **Dark / Light mode** | System-preference default, toggle in nav, persisted to localStorage |
| **Contact form** | EmailJS — zero backend, keys loaded from environment variables |
| **Responsive** | Mobile hamburger menu with active section indicator, fluid grid breakpoints |

---

## Stack

![React](https://img.shields.io/badge/React-16-61DAFB?style=flat-square&logo=react&logoColor=black)&nbsp;
![Three.js](https://img.shields.io/badge/Three.js-r160-000000?style=flat-square&logo=three.js)&nbsp;
![SCSS](https://img.shields.io/badge/SCSS-design%20system-CC6699?style=flat-square&logo=sass)&nbsp;
![EmailJS](https://img.shields.io/badge/EmailJS-contact%20form-F4A836?style=flat-square)&nbsp;
![Netlify](https://img.shields.io/badge/Netlify-auto%20deploy-00C7B7?style=flat-square&logo=netlify)

---

## Project structure

```
src/
├── portfolio.js              ← single source of truth for all content
├── design.scss               ← complete design system (CSS custom properties, dark/light)
├── containers/
│   ├── greeting/             ← hero section (Three.js canvas)
│   ├── about/                ← about me with photo
│   ├── skills/               ← skills grid (3 columns)
│   ├── workExperience/       ← timeline cards
│   ├── StartupProjects/      ← project cards with cover images
│   ├── education/            ← education cards
│   └── contact/              ← EmailJS contact form
└── components/
    ├── heroCanvas/           ← Three.js Fibonacci sphere
    ├── gooeyNav/             ← morphing pill nav indicator
    ├── techMarquee/          ← infinite scrolling tech strip
    ├── header/               ← nav + mobile menu
    └── footer/
```

---

## Local setup

```bash
git clone https://github.com/dev2842000/Portfolio
cd Portfolio
npm install

# Configure the contact form
cp .env.example .env.local
# Fill in your EmailJS keys (see below)

npm start
# → http://localhost:3000
```

### Contact form (EmailJS)

Sign up at [emailjs.com](https://www.emailjs.com) — free tier is 200 emails/month.

```env
# .env.local  (gitignored — never commit this file)
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

The form degrades gracefully — if the keys are missing, the button shows a setup notice instead of silently failing.

---

## Sections

| Section | Container | What to edit in `portfolio.js` |
|---|---|---|
| Hero | `greeting/` | `greeting.title`, `greeting.subTitle`, `greeting.resumeLink` |
| About Me | `about/` | `skillsSection.skills` (bullet points) |
| Skills | `skills/` | `skillCategories` array |
| Experience | `workExperience/` | `workExperiences.experience` array |
| Projects | `StartupProjects/` | `bigProjects.projects` array |
| Education | `education/` | `educationInfo.schools` array |
| Contact | `contact/` | `contactInfo.number`, `contactInfo.email_address` |

---

## Featured projects

<table>
<tr>
<td width="50%">

### Multi-Agent PR Reviewer
AI pipeline that reviews pull requests using multiple Claude agents in parallel — each focused on a different concern (security, logic, style). Posts a consolidated review back to GitHub.  
[→ github.com/dev2842000/multi-agent-pr-reviewer](https://github.com/dev2842000/multi-agent-pr-reviewer)

</td>
<td width="50%">

### Jira Autopilot
Fetches open Jira tickets → generates a fix roadmap → runs parallel Claude API agents → Cypress E2E tests → opens GitHub PRs → posts results back to Jira. Runs daily at 8 AM.  
[→ github.com/dev2842000/jira-autopilot](https://github.com/dev2842000/jira-autopilot)

</td>
</tr>
<tr>
<td width="50%">

### BlurShield
Privacy-first browser extension that detects and blurs PII in real time — names, emails, phone numbers — using on-device regex + ML classification. Zero data leaves the browser.

</td>
<td width="50%">

### Crobo — Remittance Platform
Cross-border payment platform (USA → India). Real-time transaction APIs, Redis optimization, compliance workflows, mobile attribution for 70 K+ user profiles.  
[→ crobo.money](https://www.crobo.money)

</td>
</tr>
</table>

---

## Customizing

**Content** — edit `src/portfolio.js`. Every section reads from it.

**Colors / theme** — all CSS custom properties are in `src/design.scss`:

```scss
.dark-mode  { --bg: #040c1e;  --accent: #3b82f6; }
.light-mode { --bg: #f4f7ff;  --accent: #2563eb; }
```

**Adding a project image** — drop the file in `src/assets/images/` and import it in `portfolio.js`:

```js
import myImg from "./assets/images/my-project.png";
// then in the projects array:
{ image: myImg, projectName: "...", ... }
```

---

## Deploy

Netlify auto-deploys on every push to `develop`. Add your EmailJS keys in the Netlify dashboard under **Site settings → Environment variables** — same key names as `.env.example`.

```bash
# Manual build
npm run build
# drag the build/ folder to netlify.com/drop
```

---

<div align="center">

Built from scratch on [developerFolio](https://github.com/saadpasta/developerFolio) &nbsp;·&nbsp; Deployed on [Netlify](https://netlify.com)

</div>
