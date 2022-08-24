import Image from "next/image";
import Link from "next/link";

const SectionHero = () => {
  return (
    <section className="hero watches center">
      <div className="container">
        <div className="flow-content">
          <p className="subtitle">Hi, {`I'm`} Dylan a</p>
          <h1 className="main-heading">Frontend Developer</h1>
          <p className="subtitle">
            that loves working with people to
            <strong>create beautiful and scalable websites.</strong>
          </p>
          <Link href="#work">
            <a className="btn">Check my work</a>
          </Link>
        </div>

        <div className="spacer">
          <Image
            src="/images/portfolio-images/dylan-color2_2k.jpg"
            alt="Dylan smiling"
            height="1707"
            width="2560"
            priority
            objectFit="cover"
          />
        </div>
      </div>
      {/* <!-- close container --> */}
    </section>
  );
};

export default SectionHero;
