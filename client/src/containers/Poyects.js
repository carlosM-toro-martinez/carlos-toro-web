import React from "react";
import "./proyects.css";
import certificate1 from "../public/certificate1.png";
import certificate2 from "../public/certificate2.png";
import certificate3 from "../public/certificate3.png";
import certificate4 from "../public/certificate4.png";
import certificate5 from "../public/certificate5.png";

export default function Poyects() {
  return (
    <div>
      <h2 style={{ color: "white", textAlign: "center" }}>Proyects</h2>
      <div id="containerPro">
        <div id="ContainerProBlock">
          <a href="https://github.com/carlosM-toro-martinez" target="_blank">
            <div
              id="containerCertP"
              style={{ backgroundImage: ` url(${certificate1})` }}
            >
              <div id="shadowP">
                <p id="paragraphProyects">
                  hola como estas esta es una prueba para saber si esto
                  funcionara o no funcionara
                </p>
              </div>
            </div>
          </a>
          <a href="https://github.com/carlosM-toro-martinez" target="_blank">
            <div
              id="containerCertP"
              style={{ backgroundImage: ` url(${certificate2})` }}
            >
              <div id="shadowP">
                <p id="paragraphProyects">
                  hola como estas esta es una prueba para saber si esto
                  funcionara o no funcionara
                </p>
              </div>
            </div>
          </a>
          <a href="https://github.com/carlosM-toro-martinez" target="_blank">
            <div
              id="containerCertP"
              style={{ backgroundImage: ` url(${certificate3})` }}
            >
              <div id="shadowP">
                <p id="paragraphProyects">
                  hola como estas esta es una prueba para saber si esto
                  funcionara o no funcionara
                </p>
              </div>
            </div>
          </a>

          <a href="https://github.com/carlosM-toro-martinez" target="_blank">
            <div
              id="containerCertP"
              style={{ backgroundImage: ` url(${certificate4})` }}
            >
              <div id="shadowP">
                <p id="paragraphProyects">
                  hola como estas esta es una prueba para saber si esto
                  funcionara o no funcionara
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
