const { createRoot } = ReactDOM; 

const projects = [
  {
    title: "Customer Scene Investigation",
    description:
      "Course project: conducted user research by gathering qualitative and quantitative data of an Art Museum. Analysed their problems and presented the customer scene investigation.",
    href: "../projects/project-1/index.html",
    image: "../images/project1/Affinity.png",
  },
  {
    title: "User Interface Design",
    description:
      "Course project: designing a mobile application for Nigerian small-holder farmer to provide them rainforecasts and crop recommendations.",
    href: "../projects/project-2/index.html",
    image: "../images/project2/phones.png",
  },
  {
    title: "Portfolio",
    description:
      "Independent project: Designing and developing a portfolio. Showcases design process and rationale.",
    href: "../projects/project-3/index.html",
    image: "../images/project3/main.png",
  },
  {
    title: "Design Thinking & Sustainability",
    description:
      "Bachelor's thesis: Design Thinking in Sustainable Product and Service Development.",
    href: "../projects/project-4/index.html",
    image: "../images/project4/main.png",
  },
  {
    title: "New feature for Cinema mobile app",
    description:
      "Course project: conducting user research and designing a new feature and service for a Finnish Cinema organization.",
    href: "../projects/project-5/index.html",
    image: "../images/project5/main.png",
  },
  {
    title: "Skipoli",
    description:
      "Volunteering: board member in one of Aalto University's largest student associations with the responsibility in PR & Communications.",
    href: "../projects/project-6/index.html",
    image: "../images/project6/landing.png",
  },
];

function App() {
  React.useEffect(() => {
    const { hash } = window.location;
    if (!hash) {
      return;
    }
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="page">
      <header className="nav">
        <div className="container nav-inner">
          <a href="index.html#home">Home</a>
          <a href="index.html#projects">Projects</a>
          <a href="../about/index.html">About</a>
          <a href="index.html#contact">Contact</a>
        </div>
      </header>

      <main>
        <section id="home" className="hero container">
          <h1>Hi, I'm Viola!</h1>
          <p>User, Data &amp; Design</p>
        </section>

        <div className="divider"></div>

        <section id="projects" className="section container">
          <h2 className="section-title">My Recent Work:</h2>
          <div className="projects-list">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="project-card">
                <div className="project-images" aria-hidden="true">
                  {project.image ? (
                    <img
                      className="project-image"
                      src={project.image}
                      alt={`${project.title} preview`}
                    />
                  ) : (
                    <div className="project-image"></div>
                  )}
                </div>
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        <section id="contact" className="section container contact">
          <h2>Contact me...</h2>
          <div className="contact-links">
            <a href="#">CV</a>
            <a href="mailto:viola.rautaheimo@gmail.com">email</a>
            <a href="https://www.linkedin.com/in/violarautaheimo/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <div className="footer-space"></div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
