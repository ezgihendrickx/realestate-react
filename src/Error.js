import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1 className="text-6xl text-red-900 text-center my-20 py-40">
        <code>404</code> {}Page not found! <big>&#128035;</big>
        <div className="text-3xl text-red-900 text-center ">
          <Link to="/">
            Take me back to <span className="underline">Home</span>
          </Link>
        </div>
      </h1>
    </div>
  );
}

export default Error;
