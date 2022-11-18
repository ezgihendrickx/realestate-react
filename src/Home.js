import React from "react";
import Car from "./Carousel";
import Main from "./Main";
import Intro from "./Intro";
import Details from "./Details";
// import "./tailwind.css";

function Home() {
  return (
    <div>
      <Intro />

      <Car />

      <Main />
    </div>
  );
}

export default Home;
