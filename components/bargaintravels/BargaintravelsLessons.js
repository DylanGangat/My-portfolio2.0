import Image from "next/image";

export default function BargaintravelsLessons() {
  return (
    <section className="lessons">
      <div className="container">
        <h2 className="section-title">
          Lessons <span className="text-accent">Learned</span>
        </h2>
        <div className="spacer two-columns">
          <div className="flow-content">
            <p>
              While developing this project I had a lot of small issues and
              hurdles to overcome so this taught me the power of
              <strong>
                {" "}
                googling and using StackOverflow to help guide me when I
                stumbled.
              </strong>
            </p>
            <p>
              I learned how important it is to keep your files{" "}
              <strong>very organized, your code clean and reusable. </strong>
              This could come back to bite you if you {"don't"} implement this
              because you might want to update your site in the future.
            </p>
            <p>
              <strong>Optimization and accessibility</strong> was two other
              things I increased my knowledge about by using lighthouse to check
              my website ratings. I paid close attention to all those micro ways
              I could make my website perform better and more accessible which
              could lead to happier customers.
            </p>
          </div>
          <div>
            <Image
              src="/images/mockups/product-item.webp"
              alt="mockup of the product info page"
              height="488"
              width="860"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
