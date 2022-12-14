import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import { houses } from "./Houses";

/* Install pure-react-carousel using -> npm i pure-react-carousel */
/* Create function first, export later */
/* include "props" in function so you can give input (e.g. house number), showing the same Details page with different content (house)*/
function Details() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const params = useParams();
  const houseId = params.houseId;
  //takes the houseID from the URL (e.g. 0 from https://antalyadomhomes.com/Details/0)
  const house = houses[houseId];
  //based on this id, selects the correct house from the Houses.js file

  return (
    //burasi carousel
    <section autoFocus>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src={"/img/houses/" + houseId + "/main.jpg"}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h1 className="text-2xl font-bold sm:text-3xl">
                {t("houses." + house.id + ".name")}
              </h1>
              <p className="mt-4 text-gray-600">
                {t("houses." + house.id + ".descrLong")}
              </p>

              <p className="mt-4 text-gray-600">
                {t("details.commonAreas")}:{" "}
                {t("houses." + house.id + ".commonAreas")}
              </p>
              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">{t("details.price")}:</dt>
                    <dd className="text-sm text-gray-500">
                      € {house.priceEUR}
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">{t("details.address")}</dt>
                    <dd className="font-medium">
                      {t("houses." + house.id + ".address")}
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
                      <p className="text-gray-500">{t("details.parking")}</p>
                      <p className="font-medium">
                        {house.parkingSpaces} {t("details.parkingSpaces")}
                      </p>
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
                      <p className="text-gray-500">{t("details.bathroom")}</p>
                      <p className="font-medium">
                        {house.bathrooms} {t("details.rooms")}
                      </p>
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
                      <p className="text-gray-500">{t("details.bedroom")}</p>
                      <p className="font-medium">
                        {house.bedrooms} {t("details.rooms")}
                      </p>
                    </div>
                  </div>
                  {/*Add a 4th symbol with the area (m²)*/}
                </div>
              </div>

              <Link to="/contact">
                <div className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                  {/*<a
                    href="contact"
                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  >*/}
                  {t("details.contact")}
                  {/*<a</a>*/}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Below: photo gallery showing the number of pictures which has been specified in the "pictures" of the house object*/}

      <div className="gallery">
        {[...Array(house.pictures)].map((e, i) => {
          return (
            <div className="" key={i}>
              <img src={"/img/houses/" + house.id + "/" + i + ".jpg"} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Details;
