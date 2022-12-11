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
import { Route, Switch, useParams } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import "./tailwind.css";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const queryParameters = new URLSearchParams(window.location.search);
  const type = queryParameters.get("type");
  const name = queryParameters.get("name");

  return (
    <div className="App">
      <button href="#" className="sr-only focus:not-sr-only">
        Skip to content
      </button>
      {/* <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("nl")}>NL</button>
      <Trans i18nKey="description.part1"></Trans>
      <div>{t("description.part2")}</div> */}
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <Aboutus />
        </Route>
        <Route path="/houses">
          <Main />
        </Route>
        <Route path="/details">
          <Details />
        </Route>

        <Route path="/details/:id" children={<Details />}>
          <Details />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <error />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
