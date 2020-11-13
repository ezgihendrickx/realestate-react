import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Car() {
  return (
    <div className="max-w-md mx-auto sm:justify-center md:justify-self-end">
      <Carousel autoPlay className="pt-5 " width="40rem" height="40rem">
        <div className="">
          <img src="/img/Chimera.JPG" alt="Olympos" />
          <a
            className="legend underline  "
            href="https://en.wikipedia.org/wiki/Mount_Chimaera"
          >
            Olympos Chimaera
          </a>
        </div>
        <div>
          <img src="/img/HadrianGate.JPG" alt="Hadrian's Gate" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Hadrian%27s_Gate"
          >
            Hadrian's Gate
          </a>
        </div>
        <div>
          <img src="/Termessos.jpg" alt="Termessos" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Termessos"
          >
            Termessos
          </a>
        </div>
        <div>
          <img src="/img/Kas.JPG" alt="Kas" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Ka%C5%9F"
          >
            Kas
          </a>
        </div>
        <div>
          <img src="/img/Olympos.JPG" alt="Olympos" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Olympus_(Lycia)"
          >
            Olympos
          </a>
        </div>
        <div>
          <img src="/img/waterfall.JPG" alt="waterfall" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Manavgat_Waterfall"
          >
            Manavgat Waterfall
          </a>
        </div>
      </Carousel>
    </div>
  );
}
export default Car;
