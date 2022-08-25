import Image from "next/image";

export default function BargaintravelsSpotlight() {
  return (
    <section className="spotlight">
      <div className="container">
        <div className="two-columns">
          <div className="info">
            <h2 className="section-title text-accent">Spotlight</h2>

            <div className="flow-content spacer">
              <p>
                The feature {"I'm"} most pleased about{" "}
                <strong>is creating a live updating cart</strong> whether you
                add, delete or change quantity of the products. This will
                reflect on your total order amount while also updating your
                local storage and cart icon amount.
              </p>
              <p>
                The only API I found that had the information I needed had{" "}
                <strong>a hard limit of 500 calls. </strong>
                So I thought this was a great challenge to test my abilities
                with the structuring and planning of my code before calling the
                API.
              </p>
            </div>
          </div>
          <div className="spacer">
            <Image
              src="/images/mockups/cape-town-destination.webp"
              alt="mockup of the city destination page"
              height="1363"
              width="860"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
