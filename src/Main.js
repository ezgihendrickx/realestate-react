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
          src="/img/havuzlu.jpg"
          link="https://www.hurriyetemlak.com/antalya-alanya-sogukpinar-satilik/villa/111828-297"
          name="Alanya Konakli"
          price={t("cards.price")}
          address={t("cards.address")}
          capacity={t("cards.capacity")}
          // "Room: 4 &#10072; Bath:2"
        />
        <Card
          src="/img/altinkum.jpg"
          link="https://www.hurriyetemlak.com/antalya-konyaalti-altinkum-satilik/daire/111828-216"
          name="Altinkum Antalya"
          price="Price: 137.000€"
          address="Adress: Altinkum mah. 200m to the sea &nbsp; 2+1 | 85m2"
          capacity="Room: 2 &#10072; Bath:1"
        ></Card>
        <Card
          src="/img/denizesifir.jpg"
          link="https://www.hurriyetemlak.com/antalya-konyaalti-gursu-satilik/daire/111828-252"
          name="Konyaalti next to the sea"
          price="Price: 352.000€"
          address="Adress: Konyaalti mah, Gursu 2+1 | 140m2"
          capacity="Room: 2 &#10072; Baths:2"
        ></Card>
      </div>
    </main>
  );
}

export default Main;
