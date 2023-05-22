import React from "react";

import heroImg from "../../assets/images/illustration-intro.png";
import Button from "../components/Button";

const LandingSection = () => {
  return (
    <section className="landingSection">
      <div className="landing setWidth d-f ai-c jc-c fd-c">
        <img src={heroImg} alt="hero image" />
        <div className="landing__contant">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <Button text="Get Started" />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
