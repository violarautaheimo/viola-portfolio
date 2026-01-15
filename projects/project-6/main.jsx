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
            <h2>Skipoli</h2>
            <p className="subtitle">Volunteering, 2023-2024</p>
          </div>

          <div className="project-row two-column">
            <div className="project-text-stack">
              <div className="project-text">
                <h3>Overview</h3>
                <p>
                  I was a board member in Skipoli, one of Aalto University’s biggest student associations. 
                  My responsibility was PR & Communications. I designed social media posts and Skipoli’s new website.
                </p>
              </div>
              <div className="project-text">
                <h3>Social Media Posts</h3>
                <p>
                  I designed and published the posts on Skipoli’s Instagram account during my time as a board member. 
                  I made the event posters myself using Figma or Adobe Illustrator. This role gave me lot of 
                  experience on social media marketing and I had a lot of fun learning to use Adobe Illustrator 
                  and Figma.
                </p>
              </div>
              <div className="project-text">
                <h3>Skipoli's Website</h3>
                <p>
                  I was given the responsibility to design Skipoli’s new website. I made some initial designs in Figma and 
                  then we decided to use Squarespace to run our website so I designed it also there. This was a very fun 
                  project and gave me chance to use my skill in practice. Check out skipoli.fi
                </p>
              </div>
            </div>
            <div className="project-mockups align-right">
              <img
                className="project-mockup-image full-width"
                src="../../images/project6/posters.png"
                alt="Posters"
              />
              
            </div>
          </div>

          <div className="project-visuals">
            <img
              className="project-visual-image"
              src="../../images/project6/figma.png"
              alt="Customer Journey 1"
            />
            <img
              className="project-visual-image"
              src="../../images/project6/landing.png"
              alt="Customer Journey 2"
            />
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
root.render(<Project5 />);
