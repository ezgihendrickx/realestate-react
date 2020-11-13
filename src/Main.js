import React from "react";
import Card from "./Card";
function Main() {
  return (
    <main id="noncopy" className="bg-gray-800">
      <h1 className="ml-10 text-white text-3xl">Houses &#127969;</h1>

      <Card
        src="/img/Antalya.JPG"
        name="Konyaalti Beach"
        price="Price: 50.000 $"
        adress="Adress: Altinkum mah. 416 sok. 17/7 D:6 "
        capacity="Beds 2 &#10072; Baths:2"
      />
      <Card
        src="/img/Kaleici.JPG"
        name="Kaleici Antalya"
        price="Price: 30.000 $"
        adress="Adress: Gokyazi mah. Ataturk Cad. N:15 D:8 "
        capacity="Beds 3 &#10072; Baths:2"
      ></Card>
      <Card
        src="/img/Sidecolumn.JPG"
        name="Side Ancient City"
        price="Price: 60.000 $"
        adress="Adress: Muratpasa mah. Adnan Menderes Bulv. D:4 "
        capacity="Beds 4 &#10072; Baths:3"
      ></Card>
    </main>
  );
}

export default Main;
