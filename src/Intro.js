import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

function Intro() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div class="">
      <div class="py-10 px-4 sm:px-6 lg:py-10 lg:px-8  flex justify-center">
        <h2 class="text-3xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block">{t("title")}</span>
          <span class="block text-indigo-600">{t("description.part1")}</span>
        </h2>
      </div>
      <div class=" ml-10 lg:mt-0 lg:flex-shrink-0  flex justify-center">
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
  );
}

export default Intro;
