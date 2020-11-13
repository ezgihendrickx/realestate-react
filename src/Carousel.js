import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Car() {
  return (
    <div className=" flex justify-center bg-gray-200 justify-start sm:justify-center md:justify-end  lg:justify-between xl:justify-around ">
      <Carousel
        autoPlay
        className="z-0 ml-10 pt-2 "
        width="40rem"
        height="40rem"
      >
        <div className="max-w-md mx-auto sm:max-w-l">
          <img src="/Termessos.jpg" alt="Termessos" />
          <a
            className="legend underline"
            href="https://www.antalyagezirehberi.net/termessos-antik-kenti.html"
          >
            Termessos Antik Kenti
          </a>
        </div>
        <div>
          <img src="/Termessos.jpg" alt="Termessos" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/Termessos.jpg" alt="Termessos" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}
export default Car;
