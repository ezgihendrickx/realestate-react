import React from "react";

import Home from "./Home";
import Navbar from "./Navbar";
import Car from "./Carousel";
// import Card from "./Card";
import Footer from "./Footer";
import Main from "./Main";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Error from "./Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <button href="#" class="sr-only focus:not-sr-only">
        Skip to content
      </button>

      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={Aboutus} />
        <Route path={"/houses"} component={Main} />
        <Route path={"/contact"} component={Contact} />
        <Route component={Error} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
