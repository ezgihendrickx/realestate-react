import React from "react";
// import { Route } from "react-router-dom/Route";
import Navbar from "./Navbar";

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
    </div>
    // </Router>
  );
}

export default App;
