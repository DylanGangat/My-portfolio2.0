import Image from "next/image";

export default function AnimestudioSpotlight() {
  return (
    <section className="spotlight">
      <div className="container">
        <div className="two-columns">
          <div className="info">
            <h2 className="section-title text-accent">Spotlight</h2>

            <div className="spacer flow-content">
              <p>
                {"I'm"} proud of how{" "}
                <strong>I learned to optimize my code</strong> making it
                reusable so I can use it in whichever section I need it. This
                shortens development time because I {"don't"} need to
                continuously write new code for each section. I can just use my
                universal driven classes.
              </p>
              <p>
                I wanted to highlight on the anime info page how{" "}
                <strong>I managed to reuse my code</strong>. With the event
                listener attached to the similar to this list, it uses{" "}
                <strong>event delegation</strong>
                and waits until you click on the anime cards name and{" "}
                <strong>
                  updates local storage with
                  {"it's"} unique id
                </strong>{" "}
                and then reuses the function that is initially called when
                loading the page.
              </p>
              <p>
                {" "}
                Repeating the whole cycle of displaying the information of the
                anime card you clicked on. By applying these techinques I manage
                to reuse my functions saving a lot of uncessary lines of code.
              </p>
            </div>
          </div>
          <div>
            <div className="showcase spacer">
              <Image
                src="/images/mockups/anime-info-page.webp"
                alt="mockup of the city destination page"
                height="1417"
                width="1060"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
