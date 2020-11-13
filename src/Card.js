import React from "react";
function Card(props) {
  return (
    <div id="appcard" className="bg-gray-600">
      <div>
        <img
          className="fotos z-0"
          src={props.src}
          alt={props.name}
          width="380px"
          height="380px"
        />
      </div>

      <div className="mb-5 text-white underline cursor-pointer leading-relaxed text-center text-lg hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
        {props.name}
      </div>
      <div className="box-border md:box-content text-base sm:text-xs md:text-xl lg:text-xl  ml-10 pl-10  box-border  md:box-content h-32 w-64 p-4 rounded-lg bg-white border-2 border-gray-600 ">
        <h2>{props.price} </h2>
        <h2>{props.adress} </h2>
        <h2>{props.capacity}</h2>
      </div>
    </div>
  );
}

export default Card;
