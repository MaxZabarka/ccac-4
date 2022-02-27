import React from "react";
import "./Banner.scss";
import HeroCard from "./HeroCard";
import heroImage from "./images/1.png";

const Banner = () => {
  return (
    <div className="Banner">
              <HeroCard/>

      <div
        className="image"
        style={{ backgroundImage: "url(" + heroImage + ")" }}
      ></div>
    </div>
  );
};

export default Banner;
