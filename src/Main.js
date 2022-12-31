import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { houses } from "./Houses";
function Main() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <main id="noncopy" className="bg-gray-800">
      <h1 className="flex justify-center text-white text-3xl">
        {" "}
        {t("navigation.nav1")} &#127969;
      </h1>
      <div className="flex justify-center flex-wrap">
        {houses.map((house, id) => {
          return (
            <div className="" key={id}>
              <Link to={"/Details/" + id + ""}>
                <Card houseId={id} />
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
