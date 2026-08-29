const inputElem = document.querySelector("#search-input");
const btnSearch = document.querySelector(".search-icon");
const spanCity = document.querySelector(".city")
const pHumidity = document.querySelector(".weather-humidity")
const pRange = document.querySelector(".weather-range")

const weather = {
  tehran: {
    temp: 30,
    humidity: 10,
    country: "Iran",
  },

  tabriz: {
    temp: 20,
    humidity: 40,    
    country: "Iran",
  },

  mashhad: {
    temp: 25,
    humidity: 30,    
    country: "Iran",
  },

  isfahan: {
    temp: 18,
    humidity: 20,
    country: "Iran",
  },

  shiraz: {
    temp: 19,
    humidity: 25,
    country: "Iran",
  },

  ahvaz: {
    temp: 35,
    humidity: 20,    
    country: "Iran",
  },

  rasht: {
    temp: 23,
    humidity: 70,
    country: "Iran",
  },

  karaj: {
    temp: 29,
    humidity: 15,
    country: "Iran",
  },

  qom: {
    temp: 31,
    humidity: 12,    
    country: "Iran",
  },

  kerman: {
    temp: 24,
    humidity: 18,
    country: "Iran",
  },

  yazd: {
    temp: 30,
    humidity: 10,    
    country: "Iran",
  },

  bandar_abbas: {
    temp: 32,
    humidity: 65,    
    country: "Iran",
  },

  urmia: {
    temp: 20,
    humidity: 35,    
    country: "Iran",
  },

  ardabil: {
    temp: 15,
    humidity: 45,    
    country: "Iran",
  },

  zanjan: {
    temp: 17,
    humidity: 30,    
    country: "Iran",
  },

  kurdistan: {
    temp: 18,
    humidity: 35,
    country: "Iran",
  },

  kermanshah: {
    temp: 21,
    humidity: 30,
    country: "Iran",
  },

  ilam: {
    temp: 22,
    humidity: 35,
    country: "Iran",
  },

  lorestan: {
    temp: 23,
    humidity: 30,
    country: "Iran",
  },

  khuzestan: {
    temp: 35,
    humidity: 25,    
    country: "Iran",
  },

  bushehr: {
    temp: 32,
    humidity: 65,    
    country: "Iran",
  },

  fars: {
    temp: 20,
    humidity: 25,
    country: "Iran",
  },

  hormozgan: {
    temp: 32,
    humidity: 65,    
    country: "Iran",
  },

  sistan_and_baluchestan: {
    temp: 30,
    humidity: 20,    
    country: "Iran",
  },

  south_khorasan: {
    temp: 27,
    humidity: 15,    
    country: "Iran",
  },

  north_khorasan: {
    temp: 23,
    humidity: 25,    
    country: "Iran",
  },

  golestan: {
    temp: 24,
    humidity: 55,
    country: "Iran",
  },

  mazandaran: {
    temp: 24,
    humidity: 65,
    country: "Iran",
  },

  gilan: {
    temp: 23,
    humidity: 70,
    country: "Iran",
  },

  semnan: {
    temp: 28,
    humidity: 15,    
    country: "Iran",
  },

  chaharmahal_and_bakhtiari: {
    temp: 16,
    humidity: 30,
    country: "Iran",
  },
};

const cityAliases = {
  "تهران": "tehran",
  "tehran": "tehran",

  "تبریز": "tabriz",
  "tabriz": "tabriz",

  "مشهد": "mashhad",
  "mashhad": "mashhad",

  "اصفهان": "isfahan",
  "isfahan": "isfahan",

  "شیراز": "shiraz",
  "shiraz": "shiraz",

  "اهواز": "ahvaz",
  "ahvaz": "ahvaz",

  "رشت": "rasht",
  "rasht": "rasht",

  "کرج": "karaj",
  "karaj": "karaj",

  "قم": "qom",
  "qom": "qom",

  "کرمان": "kerman",
  "kerman": "kerman",

  "یزد": "yazd",
  "yazd": "yazd",

  "بندرعباس": "bandar_abbas",
  "bandar abbas": "bandar_abbas",
  "bandar_abbas": "bandar_abbas"
};

function showCityWeather() {
  const inputCity = inputElem.value.trim().toLocaleLowerCase();
  const cityKey = cityAliases[inputCity];
  const data = weather[cityKey];

  if (!data) {
    alert("شهر پیدا نشد");
  } else {
    spanCity.textContent = cityKey[0].toUpperCase() + cityKey.slice(1);
    pHumidity.textContent = `Humidity: ${data.humidity}%`;
    pRange.textContent = data.temp;
  }
}

btnSearch.addEventListener("click", showCityWeather);
