export default function BargaintravelsGoals() {
  return (
    <section className="goals">
      <div className="container">
        <h2 className="section-title text-accent">Purpose and Goals</h2>
        <div className="spacer flow-content">
          <p>
            <strong>
              My initial thought process was to be able to have a basic website
              setup.
            </strong>{" "}
            Being able to display info {"that's"} being received from the API to
            display it in a template. Also being able to click on a clothing
            item and display it in a cart.
          </p>
          <p>
            Once I achieved those simple tasks I{" "}
            <strong>
              decided to improve my site by making use of local storage
            </strong>{" "}
            to be able to store the info you received from the API to the saved
            trips page.
          </p>
          <p>
            {" "}
            With the cart I decided to add more functionality to it by making
            the user be able to dynamically add and remove products and seeing
            all this reflect live with its total amount in the cart.
          </p>
        </div>
      </div>
    </section>
  );
}
