import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */
/* Create function first, export later */
/* include "props" in function so you can give input (e.g. house number), showing the same Details page with different content (house)*/
function Details(props) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    //burasi carousel
    <section autoFocus>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src="/img/houses/1/main.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Konak Twin Towers
              </h1>
              <p className="mt-4 text-gray-600">
                Konak Twin Towers 1 Project consists of a land area of ​​3,751
                m2. It consists of 2 blocks and 174 flats in the city center of
                Alanya. 200 mt. to Mahmutlar center, 20 mt. to the beach. is at
                a distance. It has a position that dominates the sea and the
                castle view.
              </p>

              <p className="mt-4 text-gray-600">
                Common Areas: Indoor Parking Lot, Doorman, 24 Hour Security,
                Outdoor Swimming Pool, Indoor Swimming Pool, Fitness, Turkish
                Bath, Steam Room, Massage Room, Sauna, Pool Bar, Children's
                Playground, Internet, Satellite System
              </p>
              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>
                    <dd className="text-sm text-gray-500">489.000 €</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>
                    <dd className="font-medium">
                      Mahmutlar Mah. D-400 highway BLV. NO:23A ALANYA/ANTALYA{" "}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center gap-8 text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                    <svg
                      className="h-4 w-4 text-indigo-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>

                    <div className="mt-1.5 sm:ml-3 sm:mt-0">
                      <p className="text-gray-500">Parking</p>
                      <p className="font-medium">2 spaces</p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                    <svg
                      className="h-4 w-4 text-indigo-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>

                    <div className="mt-1.5 sm:ml-3 sm:mt-0">
                      <p className="text-gray-500">Bathroom</p>
                      <p className="font-medium">2 rooms</p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                    <svg
                      className="h-4 w-4 text-indigo-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>

                    <div className="mt-1.5 sm:ml-3 sm:mt-0">
                      <p className="text-gray-500">Bedroom</p>
                      <p className="font-medium">2 rooms</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/contact">
                <div className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                  {/*<a
                    href="contact"
                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  >*/}
                  Get in Touch
                  {/*<a</a>*/}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Below: photo gallery*/}

      <div className="gallery">
        <img src="/img/houses/1/mutfak.jpg" alt="" />
        <img src="/img/houses/1/giris.jpg" alt="" />
        <img src="/img/houses/1/salon.jpg" alt="" />
        <img src="/img/houses/1/yatakodasi.jpg" alt="" />
        <img src="/img/houses/1/lavabo.jpg" alt="" />
        <img src="/img/houses/1/teras.jpg" alt="" />
      </div>
    </section>
  );
}

export default Details;
