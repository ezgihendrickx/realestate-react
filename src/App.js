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
import {
  Route,
  Switch,
  useParams,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import "./tailwind.css";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const type = queryParameters.get("type");
  const name = queryParameters.get("name");

  return (
    <div className="App">
      <button href="#" className="sr-only focus:not-sr-only">
        Skip to content
      </button>

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
        <Route path="/details/:houseId">
          <Details />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
