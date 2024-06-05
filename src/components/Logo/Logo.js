import React from "react";
import Tilt from "react-parallax-tilt";
import "./logo.css";
import brain from "./brainstorm.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2">
        <div
          style={{
            height: "150px",
            width: "150px",
            paddingTop: "8px",
          }}
        >
          <img src={brain} alt="" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
