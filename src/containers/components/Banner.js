import React from "react";
import Button from "./Buttons";

const Banner = () => {
  return (
    <section className="root-banner">
      <div className="banner-img">
        <p className="banner-text">
          Having any <span className="orange-txt">issues</span> with your order?
        </p>
        <Button className="btn-primary-banner">
          <p>Contact us</p>
        </Button>
      </div>
    </section>
  );
};

export default Banner;
