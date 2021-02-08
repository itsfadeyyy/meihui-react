import React from "react";
import profileImg from "../images/me.jpg";
import Typed from "react-typed";
import Pdf from "../images/MeihuiResume.pdf";
const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={profileImg} alt="" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Mei Hui and I'm a {' '}
              <Typed
            strings={["UI/UX Designer ", "Front-end Developer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
            </div>
            <p>
            I'm an interaction designer who likes simple and neat designs.
            As for my personality, I'm a easy-going person and open to new opportunities so I can further improve myself.
            I will always give my best to produce a good quality work.
            </p>
            <a href={Pdf} target = "_blank">Download resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
