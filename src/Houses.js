//To do later: import houses data from excel file using JS code. For now, add all info here//
let houseTypes = ["Villa", "House", "Apartment"];
let provinces = ["Antalya"];
let cities = [
  "Antalya",
  "Alanya",
  "Manavgat",
  "Kemer",
  "Kumluca",
  "Kaş",
  "Demre",
];
let districts = [""];
let status = ["For Sale", "Sold", "Deleted", "Option"];

//Every house below will be shown in the cards --> only add when final & all info is available. Otherwise add to testHouses variable below (not used)
export let houses = [
  //0
  {
    id: 0,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Lara I", //not used, for reference (translation file is used)
    type: houseTypes[3],
    pictures: 7, //Total number of pictures to show (excluding card/main picture)
    priceEUR: "50/night",
    postalCode: "",
    province: provinces[0],
    city: cities[0],
    district: districts[0],
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 2,
    m2: 70,

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
    name: "Lara II", //not used, for reference (translation file is used)
    type: houseTypes[3],
    pictures: 7,
    priceEUR: "45/night",
    postalCode: "",
    province: provinces[0],
    city: cities[0],
    district: districts[0],
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 2,
    m2: 70,
  },
  //2
  {
    id: 2,
    status: status[6],
    registration: new Date("2022-12-04"),
    name: "Demre Myra", //not used, for reference (translation file is used)
    type: houseTypes[3],
    pictures: 7,
    priceEUR: "30/night",
    postalCode: "",
    province: provinces[0],
    city: cities[6],
    district: districts[0],
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 2,
    m2: 35,
  },
  //3
  {
    id: 3,
    status: status[6],
    registration: new Date("2022-12-04"),
    name: "Demre Lycia", //not used, for reference (translation file is used)
    type: houseTypes[3],
    pictures: 7,
    priceEUR: "25/night",
    postalCode: "",
    province: provinces[0],
    city: cities[6],
    district: districts[0],
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 2,
    m2: 30,
  },
  //4
  {
    id: 4,
    status: status[6],
    registration: new Date("2022-12-04"),
    name: "Demre Kekova", //not used, for reference (translation file is used)
    type: houseTypes[3],
    pictures: 8,
    priceEUR: "23/night",
    postalCode: "",
    province: provinces[0],
    city: cities[6],
    district: districts[0],
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 2,
    m2: 30,
  },
  //5
  {
    id: 5,
    status: status[6],
    registration: new Date("2022-12-04"),
    name: "Demre Andriake", //not used, for reference (translation file is used)
    type: houseTypes[3],
    pictures: 7,
    priceEUR: "23/night",
    postalCode: "",
    province: provinces[0],
    city: cities[6],
    district: districts[0],
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 1,
    m2: 30,
  },
  //6
  {
    id: 6,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Altinkum konyaalti I", //not used, for reference (translation file is used)
    type: houseTypes[3],
    pictures: 8,
    priceEUR: "60/night",
    postalCode: "",
    province: provinces[0],
    city: cities[0],
    district: districts[0],
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 1,
    m2: "60",
  },

  //7
  {
    id: 7,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Altinkum konyaalti II", //not used, for reference (translation file is used)
    type: houseTypes[3],
    pictures: 8,
    priceEUR: "60/night",
    postalCode: "",
    province: provinces[0],
    city: cities[0],
    district: districts[0],
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 1,
    m2: "60",
  },
  //8
  /*
  {
    id: 8,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Konak Twin Towers 1", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 8,
    priceEUR: "329.000",
    postalCode: "",
    province: provinces[0],
    city: cities[1],
    district: districts[0],
    bedrooms: 2,
    bathrooms: 1,
    parkingSpaces: 1,
    m2: "82",
  },
  //9
  {
    id: 9,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Konak Twin Towers 2", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 10,
    priceEUR: "489.000",
    postalCode: "",
    province: provinces[0],
    city: cities[1],
    district: districts[0],
    bedrooms: 2,
    bathrooms: 1,
    parkingSpaces: 1,
    m2: "140",
  },*/
];

let testHouses = [{}, {}];
