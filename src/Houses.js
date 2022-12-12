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
    priceEUR: 489000,
    priceTRY: 0,
    address: "600m to Cleopatra beach 2+1 | 140m2",
    postalCode: "",
    province: provinces[0],
    city: cities[1],
    district: districts[0],
    descrLong: "",
    descrShort: "",
    descrLocation: "",
    bedrooms: 2,
    bathrooms: 2,
    parking: 2,
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
    address: "700m to Cleopatra beach 2+1 | 70m2",
    priceEUR: "209.000",
    capacity: "Room: 2  Bath:1",
    pictures: 2,
  },
  {
    id: 2,
    name: "Alanya center",
    priceEUR: "309.000",
    address: "700m to Cleopatra beach 3+1 | 138m2",
    capacity: "Room: 2  Bath:2",
    pictures: 3,
  },
];
