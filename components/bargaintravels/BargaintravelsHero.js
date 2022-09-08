import { motion } from "framer-motion";
import Image from "next/image";

export default function BargaintravelsHero() {
  return (
    <section className="intro watches flow-content">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="main-heading"
        >
          BargainTravels
        </motion.h1>
        <div className="spacer flow-content">
          <p>
            This is a project that {"I'm"} highly passionate about. I always
            wanted to create a travel type website because I love to travel. I
            designed and developed this website alone because I wanted to{" "}
            <strong>
              improve my javascript skills and push myself into making a
              multi-functional, easy-to-use website.
            </strong>
          </p>
          <p>
            {"You'll"} be able to search for any city which makes use of a{" "}
            <strong>Travel Advisor API</strong> to gather all the information
            needed to display {"it's"}
            <strong> attractions, restaurants and hotels</strong> in a template
            that is dynamically generated.
          </p>
          <p>
            I also integrated an <strong>e-commerce shop</strong> which is
            globally available through out the website and updates live
            depending on how the user interacts with the shop.{" "}
            <strong>
              Whether they adding, removing or increasing the quantities of the
              products.
            </strong>
          </p>
        </div>
        <div className="details split spacer">
          <div className="flow-content">
            <h3 className="project-subtitle">Stack</h3>
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Tailwindcss</li>
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
                  href="https://bargaintravels.netlify.app/"
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
                  href="https://github.com/DylanGangat/BargainTravels"
                >
                  Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="spacer">
          <Image
            src="/images/mockups/browser/bargaintravels-website-mockup.webp"
            alt="mockup of bargaintravels hero section"
            height="884"
            width="1380"
          />
        </div>
      </div>
    </section>
  );
}
