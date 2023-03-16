import React from "react";
import "./Home.css";
import certificate1 from "../public/certificate1.png";
import certificate2 from "../public/certificate2.png";
import certificate3 from "../public/certificate3.png";
import certificate4 from "../public/certificate4.png";
import certificate5 from "../public/certificate5.png";

export default function Home() {
  return (
    <div>
      <div className="containerHome">
        <div className="textContainer">
          <p
            className="text"
            style={{
              fontFamily: "Courier New, monospace",

              fontWeight: "bold",
            }}
          >
            Hi, my name is Carlos.
          </p>
          <p
            className="text"
            style={{
              fontFamily: "Apple Chancery, cursive",
            }}
          >
            I am a front-end developer; I also have backend knowledge. I
            consider myself passionate about technology. Thanks for visiting.
          </p>
        </div>
        <div className="prueba">
          <div className="webLogos"></div>
        </div>
      </div>
      <hr />
      <div className="containerCert">
        <div className="imagesContainer">
          <img className="imageCert" src={certificate1} />
          <img className="imageCert" src={certificate2} />
          <img className="imageCert" src={certificate3} />
          <img className="imageCert" src={certificate4} />
          <img className="imageCert" src={certificate5} />
        </div>
      </div>
    </div>
  );
}
