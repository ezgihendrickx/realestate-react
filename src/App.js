import React from "react";
// import { Route } from "react-router-dom/Route";
import Navbar from "./Navbar";
import Car from "./Carousel";
import Footer from "./Footer";
import Main from "./Main";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
// import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // <Router>
    <div className="App">
      {/* <Route
          path="/"
          render={() => {
            return <h1>hi ik ben Ezgi hoe gaat het?</h1>;
          }}
        /> */}

      <button href="#" class="sr-only focus:not-sr-only">
        Skip to content
      </button>

      <Navbar />
      {/* <Switch>
        <Route path="/Navbar" component={Navbar} /> */}
      <Car />
      {/* <Route path="/Car" exact component={Car} />
      </Switch> */}
      <Main />
      <Aboutus />
      <Contact />
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
