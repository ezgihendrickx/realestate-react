import React from "react";
import Navbar from "./Navbar";
import Car from "./Carousel";
import Card from "./Card";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Car />
      <Card />
      <Card />
      <Card />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
