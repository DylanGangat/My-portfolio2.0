import React from "react";

export default function AnimestudioGoals() {
  return (
    <section className="goals">
      <div className="container">
        <h2 className="section-title text-accent">Purpose and Goals</h2>
        <div className="flow-content spacer">
          <p>
            The main goal I wanted to achieve was to be able to{" "}
            <strong>
              populate my template with the data I received from the API.
            </strong>{" "}
            When I click on the {"anime's"} name I would store its unique id
            with local storage and pass it to the API to receive that{" "}
            {"anime's"} unique info and display it on the anime info page.
          </p>
          <p>
            Keeping my <strong>code clean and readable</strong> is something I
            would like to achieve.
          </p>
          <p>
            <strong>Paying attention to responsive design</strong> and trying to
            achieve that with the least amount of code possible.
          </p>
          <p>
            Keeping my eye on the{" "}
            <strong>performance, accessibility, best practices and seo</strong>{" "}
            of my website so it can get a high score on lighthouse.
          </p>
        </div>
      </div>
    </section>
  );
}
