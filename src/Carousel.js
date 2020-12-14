import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

function Car() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2  mx-auto md:justify-self-end ">
      <div class="bg-gray-50">
        <div class=" mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">{t("title")}</span>
            <span class="block text-indigo-600">{t("description.part1")}</span>
          </h2>
        </div>
        <div class="mt-8 ml-10 lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex  rounded-md shadow">
            <Link
              to="/houses"
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {t("navigation.nav1")}
            </Link>
          </div>
        </div>
      </div>
      <Carousel autoPlay className="pt-5 " width="%50" height="%50">
        <div className>
          <img src="/img/kaleiciyatlimani.jpg" alt="Kaleici oldtown" />
          <a
            className="legend underline "
            href="https://en.wikipedia.org/wiki/Kalei%C3%A7i"
            target="blank_"
          >
            KALEICI YACHT HARBOUR
          </a>
        </div>

        <div>
          <img src="/img/olympos1.jpg" alt="Olympos" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Olympus_(Lycia)"
            target="blank_"
          >
            OLYMPOS
          </a>
        </div>
        <div className>
          <img src="/img/Side.jpg" alt="Side" />
          <a
            className="legend underline"
            alt="Side"
            href="https://en.wikipedia.org/wiki/Side%2C_Turkey"
            target="blank_"
          >
            SIDE ANCIENT CITY
          </a>
        </div>
        <div>
          <img src="/img/kas1.jpg" alt="Kas city" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Ka%C5%9F"
          >
            KAŞ
          </a>
        </div>
        <div>
          <img src="/img/phaselis1.jpg" alt="Phaselis" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Phaselis"
            target="blank_"
          >
            PHASELIS
          </a>
        </div>
        <div>
          <img src="/img/kemer1.jpg" alt="Kemer city" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Kemer"
            target="blank_"
          >
            KEMER
          </a>
        </div>

        <div>
          <img src="/img/skiinginantalya.jpg" alt="skiinginAntalya" />
          <a
            className="legend underline"
            href="http://www.saklikent.com.tr/default.aspx"
            target="blank_"
          >
            SKIING IN ANTALYA
          </a>
        </div>
        <div className>
          <img src="/img/kekova.jpg" alt="kekovaisland" />
          <a
            className="legend underline  "
            href="https://en.wikipedia.org/wiki/Kekova"
            target="blank_"
          >
            KEKOVA ISLANDS / THE SUNKEN CITY
          </a>
        </div>
        <div className>
          <img src="/img/konyaaltiplaji.jpg" alt="konyaaltibeach" />
          <a
            className="legend underline  "
            href="https://en.wikipedia.org/wiki/Konyaalt%C4%B1_Beach"
            target="blank_"
          >
            KONYAALTI BEACH
          </a>
        </div>
      </Carousel>
    </div>
  );
}
export default Car;
