import React from "react";

//To do later: import houses data from excel file using JS code. For now, add all info here//
let houseTypes = ["Villa", "House", "Apartment"];
let provinces = ["Antalya"];
let cities = ["Antalya", "Alanya", "Manavgat", "Kemer", "Kumluca", "Kaş"];
let districts = [""];
let status = ["For Sale", "Sold", "Deleted", "Option"];
export let houses = [
  {
    id: 0,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Konak Twin Towers",
    type: houseTypes[2],
    pictures: 7, //Total number of pictures to show (excluding card/main picture)
    priceEUR: "489.000",
    priceTRY: 0,
    address: "Mahmutlar Mah. D-400 highway BLV. No:23A Alanya/Antalya",
    postalCode: "",
    province: provinces[0],
    city: cities[1],
    district: districts[0],
    descrLong:
      "Konak Twin Towers 1 Project consists of a land area of ​​3,751m2. It consists of 2 blocks and 174 flats in the city center of Alanya. 200 mt. to Mahmutlar center, 20 mt. to the beach. is at a distance. It has a position that dominates the sea and the castle view.",
    descrShort: "600m to Cleopatra beach 2+1 | 140m2",
    commonAreas:
      "Indoor Parking Lot, Doorman, 24 Hour Security, Outdoor Swimming Pool, Indoor Swimming Pool, Fitness, Turkish Bath, Steam Room, Massage Room, Sauna, Pool Bar, Children's Playground, Internet, Satellite System",
    descrLocation: "",
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 2,
    m2: 140,
    capacity: "Room:4  Bath:2",
    //Note: later add boolean for swimming pool, sauna, fitness etc. to filter on
    //address={t("cards.address")}
    //capacity={t("cards.capacity")}
    // "Room: 4 &#10072; Bath:2"
  },
  {
    id: 1,
    name: "Alanya center",
    descrShort: "700m to Cleopatra beach 2+1 | 70m2",
    priceEUR: "209.000",
    capacity: "Room: 2  Bath:1",
    pictures: 2,
  },
  {
    id: 2,
    name: "Alanya center",
    priceEUR: "309.000",
    descrShort: "700m to Cleopatra beach 3+1 | 138m2",
    capacity: "Room: 2  Bath:2",
    pictures: 3,
  },
];
