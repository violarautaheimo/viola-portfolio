const { createRoot } = ReactDOM;

function Project5() {
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
            <h2>New Feature for a Cinema Application</h2>
            <p className="subtitle">Course Project, Autumn 2023</p>
          </div>

          <div className="project-row two-column">
            <div className="project-text-stack">
              <div className="project-text">
                <h3>Summary</h3>
                <p>
                  Me and my multidisciplinary team solved a challenge by using service design 
                  approaches and methods. Our context was cinemas and challenge was to attract 
                  customers who don’t normally find enough value in going to cinemas. The goal was 
                  also to promote local and independent films on the big screen. I was responsible
                  for making the prototype on Figma.
                </p>
              </div>
              <div className="project-text">
                <h3>Design Process</h3>
                <p>
                  The research and design steps in this project were the following:
                </p>
                <ul>
                  <li>Semi-structured interviews and categorizing them into themes</li>
                  <li>Creating personas from the data from interview themes</li>
                  <li>Used the Jobs to be done -method (JTBD) to analyse the personas' actions and emotions</li>
                  <li>Creating customer journey maps</li>
                  <li>Brainstorming for the solution</li>
                  <li>Making a Figma prototype</li>
                  <li>Creating service blueprints and benchmarking</li>
                </ul>
              </div>
            </div>
            <div className="project-mockups align-right">
              <img
                className="project-mockup-image full-width"
                src="../../images/project5/main.png"
                alt="Phone mockups"
              />
              
            </div>
          </div>

          <div className="project-visuals">
            <img
              className="project-visual-image"
              src="../../images/project5/journey1.png"
              alt="Customer Journey 1"
            />
            <img
              className="project-visual-image"
              src="../../images/project5/journey2.png"
              alt="Customer Journey 2"
            />
          </div>

          <div className="project-row full-width">
            <div className="project-text">
              <h3>Solution and Reflection</h3>
              <p>
                We created an user-friendly application feature design that allows users to vote for the 
                film they want to see on the big screen. Bigger pool of movies to choose from, more 
                personalized experience. Our solution provides a unique and engaging way for cinema 
                lovers to shape their movie-going experience. By giving them the power to vote, we 
                create a sense of community and excitement around every sceering.
              </p>
              <p>
                This project was one of the first UI/UX design projects I did for school. I learned a lot about working in a team
                and collaboratively making decision on design choices. This was also the project were I got hooked on designing on
                Figma and making working prototypes. 
              </p>
            </div>
          </div>

          <img
            className="project-journey-image"
            src="../../images/project5/blueprint.png"
            alt="Service Blueprint"
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
root.render(<Project5 />);
