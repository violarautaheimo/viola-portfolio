const { createRoot } = ReactDOM;

function Project1() {
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
            <h2>Customer Scene Investigation</h2>
            <p className="subtitle">Course Project, Fall 2025</p>
          </div>

          <div className="project-row two-column">
            <div className="project-text-stack">
              <div className="project-text">
                <h3>Project Overview</h3>
                <p>
                  Me and my team conducted a customer scene investigation (CSI) at the Helsinki Art Museum HAM.
                  The goal was not to design solutions, but to define and articulate a design space by identifying
                  key problems and opportunities in the museum visitor experience through real-world user research.
                </p>
              </div>
              <div className="project-text">
                <h3>Research Methods and Analysis</h3>
                <p>
                  We applied a range of user-centered research methods throughout the
                  project. To ensure reliability and depth of insight, we triangulated
                  qualitative and quantitative data collected directly in the field. 
                </p>
                <p>Research and data collection methods included:</p>
                <ul>
                    <li>Semi-structured interviews with museum visitors</li>
                    <li>Online questionnaires</li>
                    <li>Systematic observations in the museum</li>
                </ul>
                <p>
                  All interview data was transcribed and anonymised, after which we conducted 
                  qualitative analysis using affinity diagramming. This allowed us to identify, 
                  cluster, and categorise recurring themes, behaviors, and pain points emerging 
                  across the dataset.
                </p>
                <p>
                  We developed a set of design artefacts that clearly communicated the visitor experience and design space:
                </p>
                <ul>
                    <li>Personas representing key visitor groups</li>
                    <li>Customer journey maps outlining touchpoints, emotions and pain points</li>
                    <li>Scenarios illustrating critical moments in the visitor experience</li>
                    <li>Stakeholder mapping to contextualise the museum experience within its broader environment</li>
                </ul>
              </div>

            </div>
            <div className="project-mockups">
              <div className="project-mockup-stack">
                <img
                  className="project-mockup-image"
                  src="../../images/project1/Poster1.png"
                  alt="Poster concept 1"
                />
              </div>
            </div>
          </div>

          <div className="project-row two-column">
            <img
              className="project-mockup-image highlight"
              src="../../images/project1/Poster2.png"
              alt="Poster concept 2"
            />
            <div className="project-text">
              <h3>Solution and Reflection</h3>
              <p>
                  Our analysis revealed recurring patterns in visitor behavior and
                  experience including:
                </p>
                <ul>
                  <li>Unclear exhibition navigation</li>
                  <li>Inconsistent placement of information cards</li>
                  <li>Strong price sensitivity</li>
                  <li>
                    High appreciation for accessibility, lighting and spatial design
                  </li>
                </ul>
                <p>
                  The project resulted in a clear definition of HAM's experiental
                  design challenges grounded in real user data. The findings above
                  highlight where visitor experience breaks down and provide a strong
                  foundation for future service work within cultural institutions.
                </p>
              <p>
                Working in a real-world context highilghed the importance of observing what people
                actually do, rather than relying only on assumptions. This project strengthened my skills
                in qualitative analysis and synthesis. I learned how to move from sometimes messy data to structured
                themes and clear design artefacts. Read more
                about this project from the link below:
              </p>
              <a
                className="text-link"
                href="https://drive.google.com/file/d/1Sh3CdGjFkHaWSHAkhmaJx3DzBkET5OM-/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                CSI report
              </a>
              

            </div>
          </div>

          <div className="project-visuals">
            <img
              className="project-visual-image"
              src="../../images/project1/Affinity.png"
              alt="Affinity diagram"
            />
            <img
              className="project-visual-image"
              src="../../images/project1/Persona.png"
              alt="Personas"
            />
          </div>

          <img
            className="project-journey-image"
            src="../../images/project1/CustomerJourney.png"
            alt="Customer journey"
          />

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
root.render(<Project1 />);
