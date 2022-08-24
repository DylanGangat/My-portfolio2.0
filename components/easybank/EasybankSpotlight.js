export default function EasybankSpotlight() {
  return (
    <section className="spotlight">
      <div className="container">
        <div>
          <div className="info">
            <h2 className="section-title text-accent">Spotlight</h2>
            <div className="spacer flow-content">
              <p>
                One of the most challenging parts of the project was figuring
                how to make the hero image section responsive and on the way, I
                learned a lot more about{" "}
                <strong>
                  positioning elements with background properties and stacking
                  context.
                </strong>
              </p>
              <p>
                This was my <strong>favorite selector</strong> due to me
                exploiting the power it has to make items responsive with only
                one line of code:
              </p>
              <p>
                <code>
                  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
