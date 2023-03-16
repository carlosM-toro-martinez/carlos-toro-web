import React from "react";
import "./proyects.css";
import encuentra from "../public/proyects/encuentra.jpg";
import arcane from "../public/proyects/arcane.png";
import continentes from "../public/proyects/continentes.png";
import carlosWeb from "../public/proyects/carlosWeb.jpg";

// import certificate2 from "../public/certificate2.png";
// import certificate3 from "../public/certificate3.png";
// import certificate4 from "../public/certificate4.png";
// import certificate5 from "../public/certificate5.png";

export default function Poyects() {
  return (
    <div>
      <h2 style={{ color: "white", textAlign: "center" }}>Proyects</h2>
      <div id="containerPro">
        <div id="ContainerProBlock">
          <a
            href="https://play.google.com/store/apps/details?id=com.encuentra&pli=1"
            target="_blank"
          >
            <div
              id="containerCertP"
              style={{ backgroundImage: ` url(${encuentra})` }}
            >
              <div id="shadowP">
                <p id="paragraphProyects">
                  <h4>Development Tools</h4>
                  App Movil, javascript, React Native CLI,
                  react-navigation/native, mapbox, socket.io, Android.
                </p>
              </div>
            </div>
          </a>
          <a href="https://proyecto-arcane.firebaseapp.com" target="_blank">
            <div
              id="containerCertP"
              style={{ backgroundImage: ` url(${arcane})` }}
            >
              <div id="shadowP">
                <p id="paragraphProyects">
                  <h4>Development Tools</h4>
                  App Web, html, css, javascript, bulma, firebase
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://transcendent-malabi-fe52e4.netlify.app/"
            target="_blank"
          >
            <div
              id="containerCertP"
              style={{ backgroundImage: ` url(${continentes})` }}
            >
              <div id="shadowP">
                <p id="paragraphProyects">
                  <h4>Development Tools</h4>
                  App Web, react, create-react-app, styled-components,
                  react-bootstrap, GraphQl Client, netlify.
                </p>
              </div>
            </div>
          </a>

          <a
            href="http://ec2-54-158-220-237.compute-1.amazonaws.com/"
            target="_blank"
          >
            <div
              id="containerCertP"
              style={{ backgroundImage: ` url(${carlosWeb})` }}
            >
              <div id="shadowP">
                <p id="paragraphProyects">
                  <h4>Development Tools</h4>
                  App Web, react, create-react-app, styled-components,
                  react-bootstrap, node js, express, AWS
                </p>
              </div>
            </div>
          </a>
          {/* <a href="https://github.com/carlosM-toro-martinez" target="_blank">
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
          </a> */}
        </div>
      </div>
    </div>
  );
}
