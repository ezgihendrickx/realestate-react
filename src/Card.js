import React from "react";
import { houses } from "./Houses";
function Card(props) {
  const id = props.houseId;
  return (
    <div id="appcard" className="bg-gray-600">
      <div className="">
        <img
          className="fotos z-0"
          src={"/img/houses/" + houses[id].id + "/card.jpg"}
          alt={houses[id].name}
          width="380px"
          height="380px"
        />
      </div>

      <div className=" mb-5 text-white underline cursor-pointer leading-relaxed text-center text-lg hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
        {/*src line: Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.*/}
        {/*<a href={props.link} target="blank_">*/}
        {houses[id].name}
        {/*</a>*/}
      </div>
      <div className="box-border box-content text-base sm:text-s md:text-xl lg:text-xl  ml-10 pl-10  h-32 w-64 p-4 rounded-lg bg-white border-2 border-gray-600 ">
        <h2>{houses[id].priceEUR} €</h2>
        <h2>{houses[id].address} </h2>
        <h2>{houses[id].capacity} </h2>
      </div>
    </div>
  );
}

export default Card;
