import Image from "next/image";

export default function AnimestudioLessons() {
  return (
    <section className="lessons">
      <div className="container">
        <h2 className="section-title">
          Lessons <span className="text-accent">Learned</span>
        </h2>
        <div className="spacer two-columns">
          <div className="flow-content">
            <p>
              This was my first multi-page project and I learned so much. From{" "}
              <strong>
                creating a design system to drawing up a wireframe, and then
                coding it out.{" "}
              </strong>
              I learned to appreciate all the tiny details that compound to form
              a website.
            </p>
            <p>
              Working with an <strong>API and local storage</strong> was a big
              challenge but it was very rewarding when I saw it all come
              together. Through spending hours googling, getting stuck, and
              figuring out my problems, I learned many of the{" "}
              <strong>best practices when using APIs </strong> and will always
              remember them.
            </p>
            <p>
              I learnt how <strong>planning and brainstorming </strong> before
              implementing features helped with keeping my code clean and
              reusable.
            </p>
          </div>
          <div>
            <Image
              src="/images/mockups/animestudio-mobile-mockup.webp"
              alt="animestudio mobile mockups"
              height="1200"
              width="1600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
