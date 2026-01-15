const { createRoot } = ReactDOM;

function Project2() {
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
            <h2>User Interface Design</h2>
            <p className="subtitle">Course Project, Fall 2025</p>
          </div>

          <div className="project-row two-column">
            <div className="project-text-stack">
              <div className="project-text">
                <h3>Project Overview</h3>
                <p>
                  This team project focused on designing a mobile user interface that supports smallholder 
                  farmers in Nigeria in making planting decisions using mid-term rainfall forecasts. 
                  The interface presents weather and crop information in an accessible, low-literacy and 
                  low-connectivity–friendly way through simple visual and audio cues.
                </p>
              
              </div>
              <div className="project-text">
                <h3>Design Process</h3>
                <p>
                  We followed a user-centered design process with the 
                  PACT framework (People, Activities, Contexts, Technologies). We identified key user characteristics, usage environments
                  and technical limitations. This phase helped define non-negotiable constraints like low literacy and limited connectivity 
                  which directly affected all following design decisions. 
                </p>
                <p>Our process included:</p>
                <ul>
                  <li>Conducting user research through a literature review</li>
                  <li>Individual paper wireframes</li>
                  <li>Collaborative selection of ideas into a shared concept</li>
                  <li>Iterative Figma prototyping with continuous peer feedback</li>
                  <li>Documenting the design rational with usability heuristics, accessibility guidelines and interaction principles</li>
                </ul>
              </div>
            </div>
            <div className="project-mockups">
              <img
                className="project-mockup-image full-width align-right"
                src="../../images/project2/phones2.png"
                alt="Phone mockup"
              />
            </div>
          </div>

          <div className="project-visuals">
            <img
              className="project-visual-image"
              src="../../images/project2/wireframes.png"
              alt="Wireframes"
            />
            <img
              className="project-visual-image"
              src="../../images/project2/figma.png"
              alt="Figma design"
            />
          </div>

          <div className="project-row full-width">
            <div className="project-text">
              <h3>Solution and Reflection</h3>
              <p>
                The project resulted in a coherent, accessible mobile UI concept that demonstrates how complex 
                information can be translated into usable interaction for underserved user groups. It highlights 
                the importance of designing within real constraints, rather than designing idealized solutions.
              </p>
              <p>Personally, the project strengthened my skills in:</p>
              <ul>
                <li>Designing for accessibility and inclusion</li>
                <li>Collaborative UI design and feedback-driven iteration</li>
                <li>Translating theory and heuristics into concrete UI decisions</li>
              </ul>
              <p>More about our design rationale and the functionality of the mobile app can be found from the link below:</p>

              <a
                className="text-link"
                href="https://drive.google.com/file/d/1ccKLsv48e4zhgyHA6fzXdy6wmG3PVQSo/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                UID report
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
root.render(<Project2 />);
