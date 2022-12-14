import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SectionHero = () => {
  return (
    <section className="hero watches center">
      <div className="container">
        <motion.div
          className="flow-content"
          initial={{ opacity: 0, translateX: -40 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="subtitle">Hi, {`I'm`} Dylan a</p>
          <h1 className="main-heading">Frontend Developer</h1>
          <p className="subtitle">
            that loves working with people to
            <strong> create beautiful and scalable websites.</strong>
          </p>
          <Link href="#work">
            <a className="btn">Check my work</a>
          </Link>
        </motion.div>

        <motion.div
          className="spacer"
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/portfolio-images/dylan-color2_2k.jpg"
            alt="Dylan smiling"
            height="1707"
            width="2560"
            priority
            objectFit="cover"
          />
        </motion.div>
      </div>
      {/* <!-- close container --> */}
    </section>
  );
};

export default SectionHero;
