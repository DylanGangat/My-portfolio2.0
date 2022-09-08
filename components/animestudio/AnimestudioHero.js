import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimestudioHero() {
  return (
    <section className="intro watches flow-content">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="main-heading"
        >
          Animestudio<span className="text-pink">+</span>
        </motion.h1>
        <div className="spacer flow-content">
          <p>
            I <strong>designed and developed</strong> the full website right
            after finishing a course in Javascript. I wanted to put what I
            learned into practice and{" "}
            <strong>
              decided to create this anime website because I love watching
              anime.
            </strong>
          </p>
          <p>
            I made use of the <strong>Jikan API</strong> to get all information
            and local storage to store it. This API is used throughout the
            website where you can{" "}
            <strong>
              check out series, movies, genres, and anime info pages.
            </strong>
          </p>
          <p>
            I also make use of a search input so you can find your desired anime
            without having to manually find it. There are also{" "}
            <strong> sign-in and sign-up pages with validation applied</strong>{" "}
            to them to give the website a more authentic feel.
          </p>
        </div>
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
                  href="https://animestudio.netlify.app/"
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
                  href="https://github.com/DylanGangat/Animestudio"
                >
                  Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="spacer">
          <Image
            src="/images/mockups/browser/animestudio-website-mockup.webp"
            alt="mockup of animstudio hero section"
            height="884"
            width="1380"
          />
        </div>
      </div>
    </section>
  );
}
