//To do later: import houses data from excel file using JS code. For now, add all info here//
let houseTypes = ["Villa", "House", "Apartment"];
let provinces = ["Antalya"];
let cities = ["Antalya", "Alanya", "Manavgat", "Kemer", "Kumluca", "Kaş"];
let districts = [""];
let status = ["For Sale", "Sold", "Deleted", "Option"];

//Every house below will be shown in the cards --> only add when final & all info is available. Otherwise add to testHouses variable below (not used)
export let houses = [
  //0
  {
    id: 0,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Konak Twin Towers", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 7, //Total number of pictures to show (excluding card/main picture)
    priceEUR: "489.000",
    postalCode: "",
    province: provinces[0],
    city: cities[1],
    district: districts[0],
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 2,
    m2: 140,

    //Note: later add boolean for swimming pool, sauna, fitness etc. to filter on
    //address={t("cards.address")}
    //capacity={t("cards.capacity")}
    // "Room: 4 &#10072; Bath:2"
  },
  //1
  {
    id: 1,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Dream Homes Alanya", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 5,
    priceEUR: "209.000",
    postalCode: "",
    province: provinces[0],
    city: cities[1],
    district: districts[0],
    bedrooms: 2,
    bathrooms: 1,
    parkingSpaces: 1,
    m2: 70,
  },
  //2
  {
    id: 2,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Alanya center", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 3,
    priceEUR: "309.000",
    postalCode: "",
    province: provinces[0],
    city: cities[1],
    district: districts[0],
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    m2: 138,
  },
];

let testHouses = [{}, {}];
