import React from "react";
import { houses } from "./Houses";
import { useTranslation } from "react-i18next";

function Card(props) {
  const id = props.houseId;
  const house = houses[id];
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div id="appcard" className="bg-gray-600">
      <div className="">
        <img
          className="fotos z-0"
          src={"/img/houses/" + house.id + "/card.jpg"}
          alt={t("houses." + house.id + ".name")}
          width="380px"
          height="380px"
        />
      </div>

      <div className=" mb-5 text-white underline cursor-pointer leading-relaxed text-center text-lg hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
        {/*src line: Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.*/}
        {/*<a href={props.link} target="blank_">*/}
        {t("houses." + house.id + ".name")}
        {/*</a>*/}
      </div>
      <div className="box-border box-content text-base sm:text-s md:text-xl lg:text-xl  ml-10 pl-10  h-32 w-64 p-4 rounded-lg bg-white border-2 border-gray-600 ">
        <h2>
          {t("details.price")}: {house.priceEUR} €
        </h2>
        <h2>{t("houses." + house.id + ".descrShort")} </h2>
        <h2>{house.capacity} </h2>
      </div>
    </div>
  );
}

export default Card;
