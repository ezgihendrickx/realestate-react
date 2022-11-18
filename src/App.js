import React from "react";

import Details from "./Details";
import Home from "./Home";
import Navbar from "./Navbar";
// import Car from "./Carousel";
// import Card from "./Card";
import Footer from "./Footer";
import Main from "./Main";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Error from "./Error";
import { Route, Switch } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import "./tailwind.css";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <button href="#" class="sr-only focus:not-sr-only">
        Skip to content
      </button>
      {/* <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("nl")}>NL</button>
      <Trans i18nKey="description.part1"></Trans>
      <div>{t("description.part2")}</div> */}
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={Aboutus} />
        <Route path={"/houses"} component={Main} />
        <Route path={"/details"} component={Details} />
        <Route path={"/contact"} component={Contact} />
        <Route component={Error} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
