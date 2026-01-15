const { createRoot } = ReactDOM;

function Project3() {
  return (
    <div className="page">
      <header className="nav">
        <div className="container nav-inner">
          <a href="../../home/index.html#home">Home</a>
          <a href="../../home/index.html#projects">Projects</a>
          <a href="../../about/index.html">About</a>
          <a href="../../home/index.html#contact">Contact</a>
        </div>
      </header>

      <main>
        <section className="section container project-page">
          <div className="project-hero">
            <h2>Portfolio</h2>
            <p className="subtitle">Independent Project, Winter 2026</p>
          </div>

          <div className="project-row two-column wide-text">
            <div className="project-text-stack">
              <div className="project-text">
                <h3>Project Overview</h3>
                <p>
                  This project documents the design and development of my personal 
                  portfolio website. The goal was to create a clear, lightweight, and 
                  easily maintainable site that presents my projects, skills, and 
                  background in a structured and visually coherent way. I designed the portfolio
                  with Figma and used HTML, CSS and React to develop it with help from AI.
                </p>
              </div>
              <div className="project-text">
                <h3>Design and Development Process</h3>
                <p>
                  I began the project by sketching wireframes on paper to explore layout, 
                  information hierarchy, and navigation. This helped me quickly to iterate structure 
                  before moving into visual design. I then translated the selected concepts into 
                  high-fidelity designs in Figma, focusing on clarity, consistency, and readability.
                </p>
                <p>
                  Based on the designs, I implemented the website using HTML, CSS, and React, 
                  keeping the structure simple and component-based. Using React was conscious design and 
                  technical decision rather than a necessity. It strengthened my understanding
                  of component-based development. During development, 
                  I used ChatGPT (Codex) as a support tool to help with coding tasks such 
                  as structuring components, debugging, and refining implementation details. 
                  All design decisions and final code integration were done by me.
                </p>
              </div>
            </div>
            <div className="project-mockups align-right">
              <img
                className="project-mockup-image full-width"
                src="../../images/project3/landing.png"
                alt="Landing page"
              />
              <img
                className="project-mockup-image full-width"
                src="../../images/project3/main.png"
                alt="About page"
              />
            </div>
          </div>

          <div className="project-visuals">
            <img
              className="project-visual-image"
              src="../../images/project3/wireframe1.png"
              alt="Affinity diagram"
            />
            <img
              className="project-visual-image"
              src="../../images/project3/figma.png"
              alt="Personas"
            />
          </div>

          <div className="project-row full-width">
            <div className="project-text">
              <h3>Solution and Reflection</h3>
              <p>
                The final portfolio is a fully responsive website that 
                reflects my design process from concept to implementation. The site 
                is hosted on GitHub, allowing for version control, easy updates, and 
                transparent documentation of my development work.
              </p>
              <p>This project shows my ability to:</p>
              <ul>
                <li>Translate design ideas into working code</li>
                <li>Combine design and development workflows</li>
                <li>Use AI tools critically as part of a modern development process</li>
                <li>Ship and maintain a live product independently</li>
              </ul>
            </div>
          </div>

        </section>

        <div className="divider"></div>

        <section className="section container contact">
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
root.render(<Project3 />);
