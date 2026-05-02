/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dev Kumar",
  title: "Hi, I'm Dev",
  subTitle: emoji(
    "Product Engineer · AI Integration · 3+ Years 🚀 I build full-stack products that ship to real users — and lately, products that think. My focus is bringing LLMs and AI into practical, production-grade software."
  ),
  resumeLink:
    "https://docs.google.com/document/d/13_W-pM0b9ueMAG4xU_boldtCc3O5fYT8RkAOeh7ElkI/edit?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sde-dev-kumar/",
  gmail: "dev69440@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "PRODUCT ENGINEER WHO OWNS PROBLEMS END-TO-END — FROM SYSTEM DESIGN TO DEPLOYMENT",
  skills: [
    emoji(
      "⚡ Shipped an AI customer support chatbot with RAG architecture, TF-IDF + Claude API — 1,900+ real conversations"
    ),
    emoji(
      "⚡ Built real-time event pipelines (Segment webhooks), mobile attribution (iOS/Android), and user DB pipelines processing 70K+ profiles"
    ),
    emoji(
      "⚡ Comfortable with ambiguity — scoping, system design, shipping, and iterating across the full stack"
    )
  ],

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Claude API",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Segment",
      fontAwesomeClassname: "fas fa-plug"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajdhani College Delhi University",
      logo: require("./assets/images/duLogo.png"),
      subHeader: "Bachelors of Arts",
      duration: "September 2019 - August 2022",
      desc: "Participated in NGO's for free education.",
    },
    {
      schoolName: "Angles Public Sr. Sec. School",
      logo: require("./assets/images/CBSELogo.png"),
      subHeader: "Senior Secendory School",
      duration: "September 2017 - April 2019",
      desc: "Ranked top 3rd. Took courses about Humanities, Political-Science ...",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend (Node.js / APIs / Microservices)",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend (React / React Native / Next.js)",
      progressPercentage: "85%"
    },
    {
      Stack: "AI Integration (Claude API / RAG / LLMs)",
      progressPercentage: "80%"
    },
    {
      Stack: "Data & Infra (PostgreSQL / Redis / Pipelines)",
      progressPercentage: "78%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "SDE-I — Full Stack Engineer",
      company: "Getbit / Crobo",
      companylogo: require("./assets/images/croboLogo.png"),
      date: "March 2025 – Present",
      desc: "Cross-border remittance platform (USA → India). Shipped AI-powered features, real-time data pipelines, and mobile integrations in a fast-moving fintech product team.",
      descBullets: [
        "Built AI customer support chatbot (RAG + TF-IDF + Claude API) — 1,900+ real conversations",
        "Engineered real-time event pipeline via Segment webhooks with CRM and analytics sync",
        "Built mobile attribution system across iOS and Android (AppsFlyer integration)",
        "Shipped referral program, milestone reward system, and user DB pipeline (70K+ profiles)"
      ]
    },
    {
      role: "Full Stack Engineer (SDE-I)",
      company: "Flot Pvt. Ltd.",
      companylogo: require("./assets/images/flotLogo.png"),
      date: "November 2024 – March 2025",
      desc: "Built core lending platform modules with complex business rule validation. Delivered operational dashboards used by 15–20 team members for loan tracking and workflow management.",
      descBullets: [
        "Built lending modules with compliance and regulatory validation",
        "Designed dashboards for loan tracking used by 15–20 team members",
        "Collaborated in agile sprints with QA and product teams"
      ]
    },
    {
      role: "Trainee Software Developer",
      company: "Hestabit Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/hestabit.jpg"),
      date: "August 2022 – April 2024",
      desc: "Delivered multiple client projects end-to-end using MERN stack and Next.js. Built a chatbot system serving 5,000+ users and resolved 50+ production bugs across client applications.",
      descBullets: [
        "Built customer-facing chatbot serving 5,000+ users",
        "Delivered 10+ client projects from requirements to production",
        "Resolved 50+ production bugs improving system stability"
      ]
    },
    {
      role: "Software Intern",
      company: "Code Planet Technologies Pvt. Ltd.",
      companylogo: require("./assets/images/codePlanet.png"),
      date: "November 2021 – July 2022",
      desc: "Optimized Python automation scripts improving execution efficiency by 30%. Managed and optimized MySQL databases with 10,000+ records.",
      descBullets: [
        "Improved Python script execution efficiency by 30%",
        "Optimized MySQL queries for 10,000+ record databases"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "FINTECH PLATFORMS AND PERSONAL PROJECTS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/fittrack.png"),
      projectName: "FitTrack",
      projectDesc: "A full-stack fitness tracking web app with workout logging, progress visualization, and user dashboards. Built with React and Node.js.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fittrack-frontend-three.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/croboLogo.png"),
      projectName: "Remittance Platform (Getbit/Crobo)",
      projectDesc: "Cross-border money transfer platform processing USA → India payments with real-time transaction APIs, compliance workflows, and Redis-powered performance optimization.",
      footerLink: [
        {
          name: "View Details",
          url: "https://www.crobo.money"
        }
      ]
    },
    {
      image: require("./assets/images/flotLogo.png"),
      projectName: "Lending Platform (Flot)",
      projectDesc: "Core lending platform with business rule validation, regulatory compliance modules, and operational dashboards actively used by 15–20 team members for loan tracking.",
      footerLink: [
        {
          name: "View Details",
          url: "https://myflot.com"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Currently open to global and remote roles. Interested in Japan 🇯🇵 (JLPT N5 in progress, open to relocation with visa sponsorship).",
  number: "+91-9711642938",
  email_address: "dev69440@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
;
;
;

