import React from "react";
function Card(props) {
  return (
    <div id="appcard" className="">
      <div>
        <img
          className="fotos z-0"
          src="/konyaalti.jpg"
          // {props.src}
          alt="foto"
          width="380px"
          height="380px"
        />
      </div>

      <div className="underline cursor-pointer leading-relaxed text-center text-lg hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
        Konyaalti Beach
      </div>
      <div className="ml-10 pl-10 text-2xl box-border  md:box-content h-32 w-64 p-4 rounded-lg bg-white border-2 border-gray-600">
        <h2>Price: 50.000 $ </h2>
        <h2>Adress: Altinkum mah. 416 sok. 17/7 D:6 </h2>
        <h2>
          Beds 2 <strong>&#10072;</strong> Baths:2{" "}
        </h2>
      </div>
    </div>
  );
}

export default Card;
