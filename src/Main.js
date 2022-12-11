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
    <main id="noncopy" className="bg-gray-800 ">
      <h1 className="flex justify-center text-white text-3xl">
        {" "}
        {t("navigation.nav1")} &#127969;
      </h1>
      <div className="flex justify-center flex-wrap">
        {houses.map((house, id) => {
          const imgSrc = "/img/houses/" + id + "/card.jpg";
          const linkSrc = "/Details/" + id + "";
          return (
            <div className="" key={id}>
              <Link to={linkSrc}>
                <Card
                  src={imgSrc}
                  //link="/details"
                  name={houses[id].name}
                  price={houses[id].priceEUR}
                  address={houses[id].address}
                  capacity={houses[id].capacity}
                  //address={t("cards.address")}
                  //capacity={t("cards.capacity")}
                  // "Room: 4 &#10072; Bath:2"
                />
              </Link>
            </div>
          );
        })}

        {/*
        <div className="">
          <Link to="/Details">
            <Card
              src="/img/houses/0/card.jpg"
              //link="/details"
              name={houses[0].name}
              price={houses[0].priceEUR}
              address={t("cards.address")}
              capacity={t("cards.capacity")}
              // "Room: 4 &#10072; Bath:2"
            />
          </Link>
        </div>
        <div className="">
          <Link to="/Details">
            <Card
              src="/img/houses/1/card.jpg"
              //link="https://antalyadomhomes.com/"
              name="Alanya Center, see more"
              price="209.000"
              address="700m to Cleopatra beach 2+1 | 70m2"
              capacity="Room: 2 &#10072; Bath:1"
            ></Card>
          </Link>
        </div>
        <div className="">
          <Link to="/Details">
            <Card
              src="/img/houses/2/card.jpg"
              //link="https://antalyadomhomes.com/"
              name="Alanya Center, see more"
              price="309.000"
              address="700m to Cleopatra beach 3+1 | 138m2"
              capacity="Room: 2 &#10072; Bath:2"
            ></Card>
          </Link>
        </div>
        */}
      </div>
    </main>
  );
}

export default Main;
