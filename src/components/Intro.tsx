import React from "react";

import "../styles/Intro.css";
// import Typist from "react-typist";
// import "react-typist/dist/Typist.css";
// import GaziModel from "./GaziModel";
// import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
// import FadeInSection from "./FadeInSection";
// import FractalTree from "./FractalTree";

const Intro = () => {
  return (
    <div id="intro">
      <span className="intro-title">
        {"hi, "}
        <span className="intro-name">{"gazi"}</span>
        {" here."}
      </span>
      <div className="intro-subtitle">I create stuff sometimes.</div>
      <div className="intro-desc">
        I'm a software engineer and artist based in Toronto. I have great
        interest in full-stack development, artificial intelligence,
        human-computer interactions, and everything in between.
      </div>
      <a href="mailto:gazi.jarin@mail.utoronto.ca" className="intro-contact">
        {"  " + "Say hi!"}
      </a>
    </div>
  );
};

export default Intro;
