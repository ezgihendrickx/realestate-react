import React from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
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
      <div className="flex justify-center">
        <Card
          src="/img/ablokno60.jpg"
          link="https://www.hurriyetemlak.com/antalya-alanya-sogukpinar-satilik/villa/111828-297"
          name="Alanya Center, see more"
          price={t("cards.price")}
          address={t("cards.address")}
          capacity={t("cards.capacity")}
          // "Room: 4 &#10072; Bath:2"
        />
        <Card
          src="/img/bblokno53.jpeg"
          link="https://www.hurriyetemlak.com/antalya-konyaalti-altinkum-satilik/daire/111828-216"
          name="Alanya Center, see more"
          price="Price: 499.000 €"
          address="Address: 600m to Cleopatra beach 2+1 | 150m2"
          capacity="Room: 2 &#10072; Bath:1"
        ></Card>
        <Card
          src="/img/ablokno56.jpeg"
          link="https://www.hurriyetemlak.com/antalya-konyaalti-gursu-satilik/daire/111828-252"
          name="Alanya Center, see more"
          price="Price: 699.000 €"
          address="Address: 600m to Cleopatra beach 3+1 | 200m2"
          capacity="Room: 2 &#10072; Baths:2"
        ></Card>
      </div>
    </main>
  );
}

export default Main;
