import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function Car() {
  return (
    <div className="grid grid-cols-2 gap-2  mx-auto md:justify-self-end">
      <div class="bg-gray-50">
        <div class=" mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Ready to make your dream home come true?</span>
            <span class="block text-indigo-600">Start your journey today.</span>
          </h2>
        </div>
        <div class="mt-8 ml-10 lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex  rounded-md shadow">
            <Link
              to="/houses"
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Houses
            </Link>
          </div>
        </div>
      </div>
      <Carousel autoPlay className="pt-5 " width="40rem" height="40rem">
        <div className>
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
