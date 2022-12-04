import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Main() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  //To do later: import houses data from excel file using JS code. For now, add all info here//
  let houseTypes = ["Villa", "House", "Apartment"];
  let provinces = ["Antalya"];
  let cities = ["Antalya", "Alanya", "Manavgat", "Kemer", "Kumluca", "Kaş"];
  let districts = [""];
  let houses = [
    {
      id: 1,
      registration: new Date("2022-12-04"),
      name: "Konak Twin Towers",
      type: houseTypes[2],
      priceEUR: 489000,
      priceTRY: 0,
      address: "",
      postalCode: "",
      province: provinces[0],
      city: cities[1],
      district: districts[0],
      descrLong: "",
      descrShort: "",
      descrLocation: "",
      bedrooms: 2,
      bathrooms: 2,
      m2: 140,
    },
    {
      id: 2,
      name: "Alanya center",
    },
    {
      id: 3,
      name: "Alanya center",
    },
  ];
  return (
    <main id="noncopy" className="bg-gray-800 ">
      <h1 className="flex justify-center text-white text-3xl">
        {" "}
        {t("navigation.nav1")} &#127969;
      </h1>
      <div className="flex justify-center">
        <div className="">
          <Link to="/Details">
            <Card
              src="/img/houses/1/card.jpg"
              //link="/details"
              name="Alanya Center, see more"
              price={t("cards.price")}
              address={t("cards.address")}
              capacity={t("cards.capacity")}
              // "Room: 4 &#10072; Bath:2"
            />
          </Link>
        </div>
        <div className="">
          <Link to="/Details">
            <Card
              src="/img/houses/2/card.jpg"
              link="https://antalyadomhomes.com/"
              name="Alanya Center, see more"
              price="209.000 €"
              address="700m to Cleopatra beach 2+1 | 70m2"
              capacity="Room: 2 &#10072; Bath:1"
            ></Card>
          </Link>
        </div>
        <div className="">
          <Link to="/Details">
            <Card
              src="/img/houses/3/card.jpg"
              link="https://antalyadomhomes.com/"
              name="Alanya Center, see more"
              price="309.000 €"
              address="700m to Cleopatra beach 3+1 | 138m2"
              capacity="Room: 2 &#10072; Bath:2"
            ></Card>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Main;
