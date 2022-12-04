//Suspense comes with i18n to avoid error message when translating files
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./tailwind.css";
import "./index.css";
import App from "./App";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

//Note: The ScrollToTop component makes sure that when you navigate to a different page (using Router/Link), the browser displays the top of the page.
//Without, when clicked on a link while being on the bottom of a page, the new page will also open on the bottom.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
