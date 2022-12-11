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
    <div className="max-w-4xl gap-2  mx-auto md:justify-self-end ">
      {/* to adjust size of carousel: adjust 4xl above*/}
      <Carousel autoPlay className="pt-5 " width="%50" height="%50 ">
        <div className="">
          <img src="/img/antalya/kaleiciyatlimani.jpg" alt="Kaleici oldtown" />
          <a
            className="legend underline "
            href="https://en.wikipedia.org/wiki/Kalei%C3%A7i"
            target="blank_"
            alt="Kaleici"
          >
            KALEICI YACHT HARBOUR
          </a>
        </div>

        <div className="">
          <img src="/img/antalya/olympos1.jpg" alt="Olympos" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Olympus_(Lycia)"
            target="blank_"
            alt="Olympos"
          >
            OLYMPOS
          </a>
        </div>
        <div className="">
          <img src="/img/antalya/Side.jpg" alt="Side" />
          <a
            className="legend underline"
            alt="Side"
            href="https://en.wikipedia.org/wiki/Side%2C_Turkey"
            target="blank_"
          >
            SIDE ANCIENT CITY
          </a>
        </div>
        <div className="">
          <img src="/img/antalya/kas1.jpg" alt="Kas city" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Ka%C5%9F"
            alt="Kas"
            target="blank_"
          >
            KAŞ
          </a>
        </div>
        <div className="">
          <img src="/img/antalya/phaselis1.jpg" alt="Phaselis" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Phaselis"
            target="blank_"
            alt="Phaselis"
          >
            PHASELIS
          </a>
        </div>
        <div className="">
          <img src="/img/antalya/kemer1.jpg" alt="Kemer city" />
          <a
            className="legend underline"
            href="https://en.wikipedia.org/wiki/Kemer"
            target="blank_"
            alt="Kemer"
          >
            KEMER
          </a>
        </div>

        <div className="">
          <img src="/img/antalya/skiinginantalya.jpg" alt="skiinginAntalya" />
          <a
            className="legend underline"
            href="http://www.saklikent.com.tr/default.aspx"
            target="blank_"
            alt="Skiing in Antalya"
          >
            SKIING IN ANTALYA
          </a>
        </div>
        <div className="">
          <img src="/img/antalya/kekova.jpg" alt="kekovaisland" />
          <a
            className="legend underline  "
            href="https://en.wikipedia.org/wiki/Kekova"
            target="blank_"
            alt="Kekova"
          >
            KEKOVA ISLANDS / THE SUNKEN CITY
          </a>
        </div>
        <div className="">
          <img src="/img/antalya/konyaaltiplaji.jpg" alt="konyaaltibeach" />
          <a
            className="legend underline  "
            href="https://en.wikipedia.org/wiki/Konyaalt%C4%B1_Beach"
            target="blank_"
            alt="Konyaalti Beach"
          >
            KONYAALTI BEACH
          </a>
        </div>
      </Carousel>
    </div>
  );
}
export default Car;
