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
    name: "Konak Twin Towers 2", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 7, //Total number of pictures to show (excluding card/main picture)
    priceEUR: "50",
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
    pictures: 6,
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
    name: "Dream Homes Alanya", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 6,
    priceEUR: "290.000",
    postalCode: "",
    province: provinces[0],
    city: cities[1],
    district: districts[0],
    bedrooms: 2,
    bathrooms: 1,
    parkingSpaces: 1,
    m2: 95,
  },
  //3
  {
    id: 3,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Park Tema Antalya", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 6,
    priceEUR: "Contact us",
    postalCode: "",
    province: provinces[0],
    city: cities[0],
    district: districts[0],
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 1,
    m2: 120,
  },
  //4
  {
    id: 4,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Park Maya", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 8,
    priceEUR: "Contact us",
    postalCode: "",
    province: provinces[0],
    city: cities[0],
    district: districts[0],
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 1,
    m2: 120,
  },
  //5
  {
    id: 5,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Park Mira", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 8,
    priceEUR: "Contact us",
    postalCode: "",
    province: provinces[0],
    city: cities[0],
    district: districts[0],
    bedrooms: 1,
    bathrooms: 1,
    parkingSpaces: 1,
    m2: 70,
  },
  //6
  {
    id: 6,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Royal Garden", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 8,
    priceEUR: "Contact us",
    postalCode: "",
    province: provinces[0],
    city: cities[0],
    district: districts[0],
    bedrooms: 4,
    bathrooms: 2,
    parkingSpaces: 1,
    m2: "",
  },
  //7
  {
    id: 7,
    status: status[0],
    registration: new Date("2022-12-04"),
    name: "Park Vega", //not used, for reference (translation file is used)
    type: houseTypes[2],
    pictures: 8,
    priceEUR: "Contact us",
    postalCode: "",
    province: provinces[0],
    city: cities[0],
    district: districts[0],
    bedrooms: 2,
    bathrooms: 1,
    parkingSpaces: 1,
    m2: "",
  },
  //8
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
  },
];

let testHouses = [{}, {}];
