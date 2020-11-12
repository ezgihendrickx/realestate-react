import React from "react";
// import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Car from "./Carousel";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <button href="#" class="sr-only focus:not-sr-only">
        Skip to content
      </button>
      <Navbar />
      <Car />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
