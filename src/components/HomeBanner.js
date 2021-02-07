import React from "react";
import Typed from "react-typed";
const HomeBanner = () => {

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Mei Hui</div>
          <div className="text-3">
            And I'm a{' '}
            <Typed
            strings={["UI/UX Designer ", "Front-end Developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          </div>
          <a href="#about">Read more</a>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
