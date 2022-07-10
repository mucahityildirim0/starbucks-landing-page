import React from "react";
import "./Boxes.css";
import boxb from "../img/box-b.png";
import boxc from "../img/box-c.png";
import boxd from "../img/box-d.png";
import boxe from "../img/box-e.jpg";
import boxf1 from "../img/box-f1.jpg";
import boxf2 from "../img/box-f2.jpg";

const Boxes = () => {
  return (
    <>
      <section className="box box-a bg-primary text-center py-md">
        <div className="box-inner">
          <h2 className="text-xl">Jıngle All The Way To Free Favorıtes</h2>
          <p className="text-md">
            Join Starbucks Rewards for delicious deals & exclusive offers.
            <a href="#">Learn more</a>
          </p>
        </div>
      </section>

      {/* Box B */}

      <section className="section box box-b bg-secondary grid-col-2">
        <img src={boxb} alt="" />
        <div className="box-text">
          <h2 className="text-xl">New to the nice list</h2>
          <p className="text-md">
            For a nondairy twist on a holiday cookie classic, try the new Iced
            Sugar Cookie Almondmilk Latte.
          </p>
          <a href="#" className="btn btn-light-outline">
            Order Now
          </a>
        </div>
      </section>
      {/* Box C */}

      <section className="section box box-c bg-secondary grid-col-2 grid-reserved">
        <img src={boxc} alt="" />
        <div className="box-text">
          <h2 className="text-xl">Merry moment</h2>
          <p className="text-md">
            Treat yourself to a festie Sugar Plum Cheese Danish with a nicely
            spiced sugar-plum spread.
          </p>
          <a href="#" className="btn btn-light-outline">
            Order Now
          </a>
        </div>
      </section>
      {/* Box D */}

      <section className="section box box-d bg-secondary grid-col-2">
        <img src={boxd} alt="" />
        <div className="box-text">
          <h2 className="text-xl">Starbucks Thanksgiving Blend</h2>
          <p className="text-md">
            This elegant dark roast returns, showcasing flavors from some of the
            world's major coffee-growing regions.
          </p>
          <a href="#" className="btn btn-light-outline">
            Order Now
          </a>
        </div>
      </section>
      {/* Box E */}

      <section className="section box box-e bg-secondary grid-col-2 grid-reserved">
        <img src={boxe} alt="" />
        <div className="box-text">
          <h2 className="text-xl">Fighting hunger this holiday.</h2>
          <p className="text-sm">
            Hunger is affecting millions of people across America this holiday
            season. Join us in out commitment to hunger relief and help feed
            neighbors in need.
          </p>
          <a href="#" className="btn btn-light-outline">
            Order Now
          </a>
        </div>
      </section>

      {/* Box F */}

      <section class="box box-f grid-col-2">
        <div>
          <img src={boxf1} alt="" />
          <div class="bg-extra py-lg">
            <div class="box-text">
              <h2 class="text-md">Let the holiday cheer come to you</h2>
              <p class="text-sm">
                Make the moment merry. Order Starbucks® holiday favorites on
                Uber Eats.*
              </p>
              <a href="#" class="btn btn-dark-outline">
                Order Now
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={boxf2} alt="" />
          <div class="bg-primary py-lg">
            <div class="box-text">
              <h2 class="text-md">Loved Passing on Netflix?</h2>
              <p class="text-sm">
                Our new social series about film adaptations kicks off with the
                actors and directors who brought the book to life.
              </p>
              <a href="#" class="btn btn-light-outline">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Boxes;
