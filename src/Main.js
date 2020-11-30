import React from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
function Main() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <main id="noncopy" className="bg-gray-800">
      <h1 className="ml-10 text-white text-3xl">
        {" "}
        {t("navigation.nav1")} &#127969;
      </h1>

      <Card
        src="/img/Antalya.JPG"
        name="Konyaalti Beach"
        price={t("cards.price")}
        address={t("cards.address")}
        capacity="Beds: 2 &#10072; Baths:2"
      />
      <Card
        src="/img/Kaleici.JPG"
        name="Kaleici Antalya"
        price="Price: 30.000 $"
        address="Adress: Gokyazi mah. Ataturk Cad. N:15 D:8 "
        capacity="Beds: 3 &#10072; Baths:2"
      ></Card>
      <Card
        src="/img/Sidecolumn.JPG"
        name="Side Ancient City"
        price="Price: 60.000 $"
        address="Adress: Muratpasa mah. Adnan Menderes Bulv. D:4 "
        capacity="Beds: 4 &#10072; Baths:3"
      ></Card>
    </main>
  );
}

export default Main;
