import React from "react";
import { Carousel } from "react-responsive-carousel";

function Car() {
  return (
    <div className="flex justify-center bg-gray-200 justify-start sm:justify-center md:justify-end lg:justify-between xl:justify-around ">
      <Carousel
        autoPlay
        className=" z-0 ml-10 pt-2"
        width="450px"
        height="600px"
      >
        <div>
          <img alt="Side" src="/side.jpg" />
          <a
            className="legend underline"
            href="https://www.goturkey.com/destinations/side"
          >
            Side Ancient City
          </a>
        </div>
        <div>
          <img alt="Phaselis" src="/Phaselis.jpg" />
          <p className="legend">Phaselis</p>
        </div>
        <div>
          <img alt="" src="/Falezler.jpg" />
          <p className="legend">Cliffs of Antalya</p>
        </div>
        <div>
          <img alt="" src="/Termessos.jpg" />
          <p className="legend">Termessos</p>
        </div>
        <div>
          <img alt="" src="/konyaalti.jpg" />
          <p className="legend">Konyaalti Beach</p>
        </div>
        <div>
          <img alt="" src="/Chimera.jpg" />
          <p className="legend">Chimera, Olympos</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg"
          />
          <p className="legend">Legend 7</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg"
          />
          <p className="legend">Legend 8</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg"
          />
          <p className="legend">Legend 9</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg"
          />
          <p className="legend">Legend 10</p>
        </div>
        <div>
          <img alt="" src="/Falezler.jpg" />
          <p className="legend">Legend 11</p>
        </div>
        <div>
          <img alt="" src="/Side.jpg" />
          <p className="legend">Legend 12</p>
        </div>
        <div>
          <img alt="" src="/Phaselis.jpg" />
          <p className="legend">Phaselis</p>
        </div>
        <div>
          <img alt="" src="/Chimera.jpg" />
          <p className="legend">Legend 14</p>
        </div>
      </Carousel>
    </div>
  );
}
export default Car;
