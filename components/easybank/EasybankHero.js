import Image from "next/image";

const EasybankHero = () => {
  return (
    <section className="intro watches flow-content">
      <div className="container">
        <h1 className="main-heading">Easybank Landing Page</h1>
        <p className="spacer">
          This is a static landing page I built because I wanted to practice
          taking a design and creating a<strong> pixel-perfect website</strong>{" "}
          from it. I focused on <strong> improving my responsive design</strong>{" "}
          and using components where ever I could within this site to make
          development easier and scalable if needed in the future.
        </p>
        <div className="details split spacer">
          <div className="flow-content">
            <h3 className="project-subtitle">Stack</h3>
            <ul>
              <li>Html</li>
              <li>Sass</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div className="flow-content">
            <h3 className="project-subtitle">Live</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dylangangat-easybank-landing-page.netlify.app/"
                >
                  View Site
                </a>
              </li>
            </ul>
          </div>
          <div className="flow-content">
            <h3 className="project-subtitle">Code</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/DylanGangat/easybank-landing-page"
                >
                  Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="spacer">
          <Image
            src="/images/mockups/browser/easybank-website-mockup.webp"
            alt="mockup of easybank hero section"
            height="884"
            width="1380"
          />
        </div>
      </div>
    </section>
  );
};

export default EasybankHero;
