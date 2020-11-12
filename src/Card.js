import React from "react";
function Card() {
  return (
    <div id="appcard" className="">
      <div>
        <img
          className="z-0"
          src="/konyaalti.jpg"
          alt="foto"
          width="400px"
          height="400px"
        />
      </div>
      <div className="underline cursor-pointer leading-relaxed text-center text-lg hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
        Konyaalti Beach
      </div>
    </div>
  );
}

export default Card;
