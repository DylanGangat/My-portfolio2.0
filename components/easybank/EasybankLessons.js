import Image from "next/image";

export default function EasybankLessons() {
  return (
    <section className="lessons">
      <div className="container">
        <h2 className="section-title">
          Lessons <span className="text-accent">Learned</span>
        </h2>
        <div className="spacer two-columns">
          <div className=" flow-content">
            <p>
              This was great practice to cement good habits with{" "}
              <strong>my understanding of responsive design</strong> and how to
              <strong> manage and keep my code clean.</strong> I learned how to
              make responsive navigation that switches into a toggle menu. This
              tested my
              <strong> critical thinking and planning skills</strong> on how to
              set up the HTML.
            </p>
            <p>
              I also spent a bit of time trying to add a simple animation to the
              toggle menu. I learned a valuable lesson that animations {"don't"}{" "}
              work with:
            </p>
            <p>
              <code>display: none;</code>
            </p>
            <p>
              I dedicated time towards practicing my{" "}
              <strong>DOM manipulation skills</strong> by making the navigation
              toggle and changing its button on a click event.
            </p>
          </div>
          <div>
            <Image
              class="phone-mockup"
              src="/images/mockups/easybank-mobile-mockups.webp"
              alt="easybank phone mockups"
              height="858"
              width="965"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
