import React from "react";
function Card() {
  return (
    <div id="appcard" className="">
      <div>
        <img
          className="z-0"
          src="/hotel.png"
          alt="foto"
          width="400px"
          height="400px"
        />
      </div>
      <div className="underline cursor-pointer leading-relaxed text-center text-lg">
        Konyaalti Beach
      </div>
    </div>
  );
}

export default Card;
