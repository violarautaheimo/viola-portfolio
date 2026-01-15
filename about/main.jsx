const { createRoot } = ReactDOM;

function About() {
  return (
    <div className="page">
      <header className="nav">
        <div className="container nav-inner">
          <a href="../home/index.html#home">Home</a>
          <a href="../home/index.html#projects">Projects</a>
          <a href="index.html">About</a>
          <a href="../home/index.html#contact">Contact</a>
        </div>
      </header>

      <main>
        <section className="section container about-page">
          <div className="about-hero">
            <h2 className="about-title">
              Little bit
              <br />
              about
              <br />
              me...
            </h2>
            <div className="about-portrait">
              <img
                className="about-portrait"
                src="../../images/about/omakuva.jpeg"
                alt="My picture"
              />
            </div>
          </div>

          <div className="about-columns">
            <div className="about-text">
              <p>
                I'm a 23-year-old Information Networks MSc. student living in Helsinki. I
                enjoy learning how design can shape people's behavior, experiences and emotions, 
                and how thoughtful design choices can make complex systems feel more human and intuitive.
              </p>
              <p>
                I'm taking the User, Data and Design study track and have one year left of my Master's studies.
                I'm genuinely passionate about what I study and enjoy working at the intersection of user-centered
                design, technology and data. At the moment, I'm actively looking for Master's thesis opportunities 
                where I can apply and further develop these interests in practical context. 
              </p>
              <p>
                One of the highlights of my studies so far was my exchange semester at Polytechnique Montreal in Fall
                2024. Living in Canada and traveling around North America broadened my perspective both professionally
                and personally. I love capturing moments, views and people during my travels. See some shots below...
              </p>
            </div>
            <div className="about-skills">
              <h3>Skills:</h3>
              <p>
                Design: Figma, Adobe Illustrator, Adobe Photoshop
                <br />
                Programming: Python, Scala, SQL, HTML, CSS, JavaScript, React
                <br />
                MS Office tools
                <br />
                LinkedIn Sales Navigator
                <br />
                Hubspot
                <br />
                Miro
              </p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="about-gallery grid-four">
            <img
              className="about-gallery-image"
              src="../../images/about/IMG_5292.JPG"
              alt="San Fran 1"
            />
            <img
              className="about-gallery-image"
              src="../../images/about/IMG_5525.JPG"
              alt="San Fran 2"
            />
            <img
              className="about-gallery-image"
              src="../../images/about/IMG_5530.JPG"
              alt="San Fran 3"
            />
            <img
              className="about-gallery-image"
              src="../../images/about/IMG_5572.JPG"
              alt="San Fran 4"
            />
          </div>
          <p className="about-caption">Maasai Mara Kenya, December 2025</p>

          <div className="about-gallery">
            <img
              className="about-gallery-image"
              src="../../images/about/nyc1.JPG"
              alt="New York city street at night"
            />
            <img
              className="about-gallery-image"
              src="../../images/about/nyc2.JPG"
              alt="Brooklyn Bridge"
            />
            <img
              className="about-gallery-image"
              src="../../images/about/nyc3.JPG"
              alt="Central Park"
            />
          </div>
          <p className="about-caption">New York, November 2024</p>

          <div className="about-gallery wide-two">
            <img
              className="about-gallery-image"
              src="../../images/about/IMG_2178.JPG"
              alt="Banff 1"
            />
            <img
              className="about-gallery-image"
              src="../../images/about/IMG_2367.JPG"
              alt="Banff 2"
            />
            
          </div>
          <p className="about-caption">Banff National Park, October 2024</p>

          <div className="about-gallery">
            <img
              className="about-gallery-image"
              src="../../images/about/boston1.jpeg"
              alt="Boston 1"
            />
            <img
              className="about-gallery-image"
              src="../../images/about/IMG_3740.JPG"
              alt="Boston 2"
            />
            <img
              className="about-gallery-image"
              src="../../images/about/boston2.jpeg"
              alt="Boston 3"
            />
          </div>
          <p className="about-caption">Boston, November 2024</p>

          <div className="about-gallery grid-four">
            <img
              className="about-gallery-image"
              src="../../images/about/IMG_2676.JPG"
              alt="San Fran 1"
            />
            <img
              className="about-gallery-image"
              src="../../images/about/IMG_2980.JPG"
              alt="San Fran 2"
            />
            <img
              className="about-gallery-image"
              src="../../images/about/IMG_2864.JPG"
              alt="San Fran 3"
            />
            <img
              className="about-gallery-image"
              src="../../images/about/IMG_2875.JPG"
              alt="San Fran 4"
            />
          </div>
          <p className="about-caption">San Francisco, October 2024</p>
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
root.render(<About />);
