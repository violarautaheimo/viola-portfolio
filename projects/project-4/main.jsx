const { createRoot } = ReactDOM;

function Project4() {
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
            <h2>Design Thinking in Sustainable Product and Service Development</h2>
            <p className="subtitle">Bachelor's Thesis, Spring 2025</p>
          </div>

          <div className="project-row two-column wide-text">
            <div className="project-text-stack">
              <div className="project-text">
                <h3>Summary</h3>
                <p>
                  My Bachelor's thesis explores how design thinking can contribute to the development 
                  of more sustainable products and services. It was conducted as a literature review. 
                  The research investigates the potential of design thinking principles to support 
                  ecological, social and economic sustainability goals. These principles are for example 
                  user-centricity, stakeholder involvement, and iterative tools.
                </p>
              </div>

              <div className="project-text">
                <h3>Literature Review and Results</h3>
                <p>
                  The study highlights how early-stage design decisions play a critical role in produc'ts 
                  overall sustainability. Design thinking, with its human-centered and problem-framing mindset, 
                  is shown to offer valuable structures and tools for addressing complex sustainability trade-offs. 
                </p>
                <p>Key themes of the thesis include:</p>
                <ul>
                  <li>The tensions between sustainability dimensios in product development</li>
                  <li>The opportunities and risks of user-centric design, especially in balancing with long-term impact</li>
                  <li>The importance of inclusive stakeholder engagement, not just end users </li>
                  <li>The use of design tools like personas, customer journey maps, and rapid prototyping</li>
                </ul>
              </div>
            </div>
            <div className="project-mockups align-right">
              <img
                className="project-mockup-image full-width"
                src="../../images/project4/muotoiluajattelu.png"
                alt="Landing page"
              />
              <img
                className="project-mockup-image full-width"
                src="../../images/project4/ajatella.png"
                alt="About page"
              />
            </div>
          </div>

          <div className="project-row full-width">
            <div className="project-text">
              <h3>Learning Outcomes</h3>
              <p>
                By completing this thesis, I gained insight into how sustainability is embedded 
                in design processes and how it can be supported through thoughtful frameworks and 
                early-phase decisions. I also got to explore design thinking both conceptually and 
                practically, analyzing how its principles and tools contribute to sustainable 
                innovation. Overall I developed my critical analysis and synthesis skills while 
                practicing evaluating academic literature and drawing connections across disciplines 
                to form a cohesive and evidence-based argument. From this thesis I got the grade 4. 
                Check out my thesis below:
              </p>
              <a
                className="text-link"
                href="https://drive.google.com/file/d/18IucIZwfeqRL4bN23KUhCtUZgShY55Jn/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Bachelor's Thesis
              </a>
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
root.render(<Project4 />);
