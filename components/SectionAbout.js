import Image from "next/image";

Image;

const SectionAbout = () => {
  return (
    <section className="about-me">
      <div className="container">
        <h2 className="section-title">
          Get to <span className="text-accent">know me</span>
        </h2>
        <div className="spacer split">
          <div className="info flow-content">
            <p>
              Hi there. <strong>{"I’m"} Dylan.</strong> {"I’m"} a
              <strong>self-taught, passionate introvert</strong> that takes
              pleasure in building websites.
            </p>
            <p>
              Well getting here {"wasn’t"} easy having come from a background in
              BSc Sports Science. I found out early in my 2nd year that I loved
              sport but only on a surface level. I decided to drop Sports
              Science and look through the web for
              <strong>a job that drives me</strong> and that is how I found web
              development.
            </p>
            <p>
              I got my first Udemy course on Javascript and from then on I had a
              <strong>
                increasingly growing passion for learning to code.
              </strong>
              Since then {"I’ve"} been hoining my skills and learning as much as
              I can on all media platforms while applying it to
              <strong>real world senarios.</strong>
            </p>
            <p>
              When {"I’m"} not staring at the screen all day
              <strong>
                I love to exercise, watch movies and have a passion for
                traveling the world.
              </strong>
            </p>
            <p>
              {"I’m"} seeking a full-time role where I can
              <strong>help a company achieve their goals.</strong>
            </p>
          </div>
          <div className="portrait">
            <Image
              src="/images/portfolio-images/dylan-color_2k.jpg"
              alt="Dylan smiling"
              height="1707"
              width="2560"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
