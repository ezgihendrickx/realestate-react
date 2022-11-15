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
          link="https://antalyadomhomes.com/"
          name="Alanya Center, see more"
          price={t("cards.price")}
          address={t("cards.address")}
          capacity={t("cards.capacity")}
          // "Room: 4 &#10072; Bath:2"
        />
        <Card
          src="/img/dreamhomes1.jpg"
          link="https://antalyadomhomes.com/"
          name="Alanya Center, see more"
          price="209.000 €"
          address="700m to Cleopatra beach 2+1 | 70m2"
          capacity="Room: 2 &#10072; Bath:1"
        ></Card>
        <Card
          src="/img/dreamhomes2.jpg"
          link="https://antalyadomhomes.com/"
          name="Alanya Center, see more"
          price="309.000 €"
          address="700m to Cleopatra beach 3+1 | 138m2"
          capacity="Room: 2 &#10072; Bath:2"
        ></Card>
      </div>
    </main>
  );
}

export default Main;
