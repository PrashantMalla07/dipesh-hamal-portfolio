import { useEffect, useMemo, useState } from "react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "profile", label: "Profile" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "documents", label: "Documents" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

const profileDetails = [
  { label: "Full Name", value: "Dipesh Bahadur Hamal" },
  { label: "Professional Title", value: "Civil & Rural Engineer" },
  { label: "NEC Registration No.", value: "97694" },
  { label: "Discipline", value: "Civil & Rural Engineering" },
  { label: "Registration Date", value: "2026-01-16" },
  { label: "Date of Birth", value: "2003-03-04" },
  { label: "Permanent Location", value: "Modi-02, Parbat, Nepal" },
  { label: "Temporary Location", value: "Pokhara, Kaski, Nepal" },
  { label: "Primary Focus", value: "Water supply, roads, irrigation, rural infrastructure" }
];

const skills = [
  {
    title: "Technical Skills",
    items: [
      { name: "AutoCAD", level: 92 },
      { name: "Civil 3D", level: 86 },
      { name: "Surveying", level: 90 },
      { name: "Structural Design", level: 84 },
      { name: "Estimation & Costing", level: 89 }
    ]
  },
  {
    title: "Field Skills",
    items: [
      { name: "Site Supervision", level: 91 },
      { name: "Project Management", level: 87 },
      { name: "Rural Development Planning", level: 89 }
    ]
  },
  {
    title: "Professional Skills",
    items: [
      { name: "Leadership", level: 89 },
      { name: "Stakeholder Communication", level: 88 },
      { name: "Problem Solving", level: 92 }
    ]
  }
];

const projects = [
  {
    title: "Upgrading Water Supply and Distribution System",
    description:
      "Comprehensive engineering study to improve treatment and distribution reliability for Nirmalpokhari, Bagmara, and Pudi service areas.",
    location: "Nirmalpokhari-Bagmara-Pudi, Kaski, Nepal",
    tools: "AutoCAD, Demand Analysis, Hydraulic Design, Site Survey",
    image: "/assets/images/projects/image3.png",
    document: "/assets/docs/Project III.docx"
  },
  {
    title: "Treatment Plant Infrastructure Assessment",
    description:
      "Field-oriented assessment of existing treatment facilities and layout performance to identify upgrade priorities and capacity constraints.",
    location: "Bagmara Treatment Area, Nepal",
    tools: "Site Inspection, Infrastructure Audit, Engineering Reporting",
    image: "/assets/images/projects/image4.png",
    document: "/assets/docs/Project III.docx"
  },
  {
    title: "Roughing Filter Design - Alternative A",
    description:
      "Developed technical plan for a 9m x 6m x 1.2m roughing filter to improve filtration output and operational continuity.",
    location: "Bagmara, Nepal",
    tools: "Civil 3D, Technical Drafting, Water Treatment Design",
    image: "/assets/images/projects/image10.png",
    document: "/assets/docs/Project III.docx"
  },
  {
    title: "Roughing Filter Design - Alternative B",
    description:
      "Prepared space-optimized 9m x 5m x 1.2m alternative design for sustainable and cost-conscious project implementation.",
    location: "Bagmara, Nepal",
    tools: "Engineering Alternatives, BOQ Input, Layout Planning",
    image: "/assets/images/projects/image13.png",
    document: "/assets/docs/Project III.docx"
  },
  {
    title: "Sectional Engineering Detailing",
    description:
      "Produced sectional detailing for chamber arrangements, filter media layers, and washout integration to support construction quality.",
    location: "Water Treatment Unit, Nepal",
    tools: "Detailing, QA/QC Review, Technical Documentation",
    image: "/assets/images/projects/image12.png",
    document: "/assets/docs/Project III.docx"
  },
  {
    title: "Rural Service Infrastructure Planning",
    description:
      "Translated field data into practical infrastructure proposals focused on safety, access, and long-term rural service resilience.",
    location: "Gandaki Province, Nepal",
    tools: "Community Coordination, Data Interpretation, Planning",
    image: "/assets/images/projects/image14.png",
    document: "/assets/docs/Project III.docx"
  }
];

const projectDocuments = [
  {
    title: "Project Report",
    type: "DOCX",
    description:
      "Full engineering documentation for the water supply and distribution upgrading project.",
    href: "/assets/docs/Project III.docx"
  },
  {
    title: "Curriculum Vitae",
    type: "PDF",
    description: "Professional CV with education, engineering background, and competency profile.",
    href: "/assets/docs/dipesh_hamal_cv.pdf"
  }
];

const experience = [
  {
    role: "Academic Field Project Engineer",
    org: "School of Engineering, Pokhara University",
    duration: "Capstone Project",
    details:
      "Led key elements of survey planning, demand analysis, and design coordination for a community water infrastructure upgrade project."
  },
  {
    role: "Rural Infrastructure Field Contributor",
    org: "Community-Based Engineering Activities",
    duration: "Field Experience",
    details:
      "Supported site supervision, basic quantity verification, and implementation-focused reporting for rural civil infrastructure tasks."
  },
  {
    role: "Community Engineering Support",
    org: "Local Development Initiatives",
    duration: "Ongoing",
    details:
      "Contributed technical recommendations aligned with local needs, service sustainability, and practical operation constraints."
  }
];

const education = [
  {
    title: "Bachelor of Civil and Rural Engineering (BCRE)",
    place: "School of Engineering, Pokhara University",
    meta: "Civil & Rural Engineering",
    note: "Special emphasis on rural water systems, field-led design, and sustainable infrastructure planning."
  },
  {
    title: "Registered General Engineer",
    place: "Nepal Engineering Council",
    meta: "Registration No: 97694 | Issued: 2026-01-16",
    note: "Licensed in Civil & Rural Engineering."
  }
];

const mapPoints = [
  {
    name: "Parbat",
    detail: "Permanent Location - Modi-02, Parbat",
    x: 300,
    y: 150
  },
  {
    name: "Pokhara, Kaski",
    detail: "Temporary Location and Professional Base",
    x: 360,
    y: 160
  },
  {
    name: "Bagmara",
    detail: "Project Area - Water System Upgrading",
    x: 390,
    y: 172
  },
  {
    name: "Nirmalpokhari",
    detail: "Project Area - Distribution Planning",
    x: 420,
    y: 182
  }
];

const galleryImages = [
  "/assets/images/projects/image3.png",
  "/assets/images/projects/image4.png",
  "/assets/images/projects/image10.png",
  "/assets/images/projects/image11.png",
  "/assets/images/projects/image12.png",
  "/assets/images/projects/image13.png",
  "/assets/images/projects/image14.png",
  "/assets/images/projects/image9.png",
  "/assets/images/credentials/nec-certificate.jpeg",
  "/assets/images/credentials/nec-id-card.jpeg"
];

const contactInfo = {
  email: "dipeshhamal007@gmail.com",
  phone: "+977 9847612179",
  permanentLocation: "Modi-02, Parbat, Nepal",
  temporaryLocation: "Pokhara, Kaski, Nepal"
};

const THEME_STORAGE_KEY = "theme-preference";

const getStoredTheme = () => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY) || localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : null;
};

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => getStoredTheme() || getSystemTheme());
  const [hasManualTheme, setHasManualTheme] = useState(() => Boolean(getStoredTheme()));
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (hasManualTheme) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (event) => {
      setTheme(event.matches ? "dark" : "light");
    };

    setTheme(mediaQuery.matches ? "dark" : "light");

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleThemeChange);
    } else {
      mediaQuery.addListener(handleThemeChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleThemeChange);
      } else {
        mediaQuery.removeListener(handleThemeChange);
      }
    };
  }, [hasManualTheme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry"
    )}&body=${body}`;
    setStatus("Thank you. Your mail application should open now.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const onToggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem(THEME_STORAGE_KEY, next);
      localStorage.setItem("theme", next);
      return next;
    });
    setHasManualTheme(true);
  };

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#hero">
          Dipesh Bahadur Hamal
        </a>
        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="cv-link" href="/assets/docs/dipesh_hamal_cv.pdf" target="_blank" rel="noreferrer">
            Open CV
          </a>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle light or dark mode"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="overlay" />
          <div className="hero-inner reveal">
            <p className="badge">Civil & Rural Engineer</p>
            <h1>Dipesh Bahadur Hamal</h1>
            <p className="lead">
              Designing sustainable infrastructure for rural development
            </p>
            <p className="hero-sub">
              Focused on practical engineering solutions in water systems, rural access,
              and community-centered infrastructure in Nepal.
            </p>
            <div className="hero-facts">
              <span>NEC Registered Engineer</span>
              <span>Water & Rural Infrastructure</span>
              <span>Field-Based Project Planning</span>
            </div>
            <div className="hero-ctas">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              <a href="#contact" className="btn ghost">
                Contact Me
              </a>
              <a href="/assets/docs/dipesh_hamal_cv.pdf" className="btn muted" download>
                Download CV
              </a>
            </div>
          </div>
        </section>

        <section className="section impact">
          <div className="impact-grid">
            <article className="impact-card reveal">
              <h3>Registered Professional</h3>
              <p>Licensed Civil & Rural Engineer recognized by Nepal Engineering Council.</p>
              <strong>NEC Reg. No. 97694</strong>
            </article>
            <article className="impact-card reveal">
              <h3>Infrastructure Focus</h3>
              <p>Design and field engagement in water supply, treatment, and rural utility planning.</p>
              <strong>Community-Centered Delivery</strong>
            </article>
            <article className="impact-card reveal">
              <h3>Project Coverage</h3>
              <p>Field study and design support across Parbat, Pokhara, Bagmara, and Nirmalpokhari.</p>
              <strong>Gandaki Province, Nepal</strong>
            </article>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-head reveal">
            <h2>About Me</h2>
            <p>
              I am a Civil and Rural Engineer committed to delivering reliable,
              environmentally conscious, and socially responsive infrastructure.
            </p>
          </div>
          <div className="about-grid">
            <article className="card reveal">
              <h3>Professional Statement</h3>
              <p>
                My expertise combines engineering design, field validation, and community
                engagement to build practical solutions for water supply, irrigation,
                roads, and local infrastructure systems.
              </p>
              <p>
                I aim to support resilient rural development by aligning technical quality,
                affordability, and long-term operational sustainability.
              </p>
            </article>
            <aside className="card credentials reveal">
              <h3>Registration Credentials</h3>
              <div className="credential-images">
                <button
                  type="button"
                  className="image-open-btn"
                  onClick={() => setSelectedImage("/assets/images/credentials/nec-certificate.jpeg")}
                >
                  <img
                    src="/assets/images/credentials/nec-certificate.jpeg"
                    alt="Nepal Engineering Council certificate"
                    loading="lazy"
                  />
                </button>
                <button
                  type="button"
                  className="image-open-btn"
                  onClick={() => setSelectedImage("/assets/images/credentials/nec-id-card.jpeg")}
                >
                  <img
                    src="/assets/images/credentials/nec-id-card.jpeg"
                    alt="Nepal Engineering Council ID card"
                    loading="lazy"
                  />
                </button>
              </div>
              <ul className="meta-list">
                <li>Registered Engineer No: 97694</li>
                <li>Subject: Civil & Rural Engineering</li>
                <li>Issued by: Nepal Engineering Council</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="profile" className="section">
          <div className="section-head reveal">
            <h2>Profile</h2>
            <p>
              Detailed professional profile and registration information.
            </p>
          </div>
          <div className="profile-grid">
            <article className="card reveal">
              <h3>Professional Overview</h3>
              <p>
                Engineer Dipesh Bahadur Hamal is focused on sustainable civil solutions
                that improve rural service delivery, strengthen local resilience, and
                support inclusive community development outcomes.
              </p>
              <p>
                Core domains include rural water infrastructure, treatment system
                improvement, site-level planning, and field-driven project execution.
              </p>
            </article>
            <article className="card reveal">
              <h3>Detail Information</h3>
              <dl className="profile-list">
                {profileDetails.map((item) => (
                  <div key={item.label} className="profile-row">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head reveal">
            <h2>Skills</h2>
            <p>
              Competencies across design software, execution management, and
              professional communication.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="card reveal" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((skill) => (
                    <div className="skill-row" key={skill.name}>
                      <div className="skill-label">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="bar">
                        <span style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head reveal">
            <h2>Projects</h2>
            <p>
              Selected engineering works in water infrastructure and rural development
              planning.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <button
                  type="button"
                  className="project-photo-btn"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img src={project.image} alt={project.title} loading="lazy" />
                </button>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>
                    <strong>Location:</strong> {project.location}
                  </p>
                  <p>
                    <strong>Tools:</strong> {project.tools}
                  </p>
                  <div className="project-actions">
                    <button
                      type="button"
                      className="action-link"
                      onClick={() => setSelectedImage(project.image)}
                    >
                      Open Photo
                    </button>
                    <a href={project.document} target="_blank" rel="noreferrer" className="action-link">
                      Open Project DOC
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="documents" className="section">
          <div className="section-head reveal">
            <h2>Project Documents</h2>
            <p>
              Click any document below to open it directly.
            </p>
          </div>
          <div className="doc-grid">
            {projectDocuments.map((doc) => (
              <article className="card reveal" key={doc.title}>
                <h3>{doc.title}</h3>
                <p className="small">{doc.type}</p>
                <p>{doc.description}</p>
                <a href={doc.href} target="_blank" rel="noreferrer" className="btn primary">
                  Open {doc.type} File
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head reveal">
            <h2>Project Gallery</h2>
            <p>Click any photo to open it in full view.</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <button
                type="button"
                className="gallery-item reveal"
                onClick={() => setSelectedImage(image)}
                key={image}
              >
                <img src={image} alt={`Project gallery ${index + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head reveal">
            <h2>Project Map (Nepal)</h2>
            <p>Representative locations of study and infrastructure engagement.</p>
          </div>
          <div className="map-wrap card reveal">
            <div className="map-layout">
              <div className="map-canvas">
                <svg viewBox="0 0 960 320" role="img" aria-label="Map of Nepal with project points">
                  <path
                    d="M30 170 L120 140 L200 155 L280 120 L360 140 L430 115 L500 130 L580 112 L650 130 L730 122 L820 138 L930 128 L920 165 L860 190 L790 185 L700 200 L630 182 L550 202 L470 188 L400 205 L320 195 L250 208 L180 192 L95 200 L35 190 Z"
                    className="nepal-shape"
                  />
                  {mapPoints.map((point, index) => (
                    <g key={point.name}>
                      <circle cx={point.x} cy={point.y} r="13" className="point-ring" />
                      <circle cx={point.x} cy={point.y} r="8" className="point" />
                      <text x={point.x} y={point.y + 4} className="point-index">
                        {index + 1}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="map-legend">
                {mapPoints.map((point, index) => (
                  <article className="legend-item" key={point.name}>
                    <span className="legend-badge">{index + 1}</span>
                    <div>
                      <h3>{point.name}</h3>
                      <p>{point.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <p className="map-note">
              Map highlights permanent base, temporary base, and principal project locations.
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head reveal">
            <h2>Experience</h2>
            <p>
              Field and project exposure contributing to sustainable civil and rural
              development outcomes.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="card reveal timeline-item" key={item.role}>
                <h3>{item.role}</h3>
                <p className="small">
                  {item.org} | {item.duration}
                </p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-head reveal">
            <h2>Education & Certification</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article className="card reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p className="small">{item.place}</p>
                <p className="small">{item.meta}</p>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-head reveal">
            <h2>Contact</h2>
            <p>Available for civil engineering and rural infrastructure collaborations.</p>
          </div>
          <div className="contact-grid">
            <form className="card reveal" onSubmit={onSubmit}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={onFormChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={onFormChange}
                required
              />

              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={onFormChange}
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={onFormChange}
                required
              />

              <button type="submit" className="btn primary">
                Send Message
              </button>
              {status ? <p className="form-status">{status}</p> : null}
            </form>

            <aside className="card reveal contact-info">
              <h3>Direct Contact</h3>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+9779847612179">{contactInfo.phone}</a>
              </p>
              <p>
                <strong>Permanent Location:</strong> {contactInfo.permanentLocation}
              </p>
              <p>
                <strong>Temporary Location:</strong> {contactInfo.temporaryLocation}
              </p>
              <div className="socials">
                <a href={`mailto:${contactInfo.email}`}>Email</a>
                <a href="/assets/docs/dipesh_hamal_cv.pdf" target="_blank" rel="noreferrer">
                  Open CV
                </a>
                <a href="https://maps.google.com/?q=Pokhara,Kaski,Nepal" target="_blank" rel="noreferrer">
                  Map
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Copyright {year} Dipesh Bahadur Hamal. All rights reserved.</p>
        <div className="footer-links">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>

      {selectedImage ? (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            className="close-lightbox"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            Close
          </button>
          <img src={selectedImage} alt="Opened image preview" />
        </div>
      ) : null}
    </div>
  );
}

export default App;
