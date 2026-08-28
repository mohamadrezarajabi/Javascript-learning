const nameInput = document.querySelector("#full-name");
const phoneInput = document.querySelector("#phone-number");
const emailInput = document.querySelector("#email-address");
const originProvinceSelect = document.querySelector("#origin-province");
const destinationProVinceSelect = document.querySelector("#destination-province");
const originCitySelect = document.querySelector("#origin-city");
const destinationCitySelect = document.querySelector("#destination-city");
const cancelBtn = document.querySelector(".btn-cancel")
const successBtn = document.querySelector(".btn-confirm")
successBtn.disabled = true

let statusName = false
let statusPhone = false
let statussEmail = false

const locations = [
  {
    province: "تهران",
    cities: ["تهران", "دماوند", "فیروزکوه", "شمیرانات"]
  },
  {
    province: "اصفهان",
    cities: ["اصفهان", "کاشان", "نجف‌آباد", "نطنز"]
  },
  {
    province: "فارس",
    cities: ["شیراز", "مرودشت", "جهرم", "فسا"]
  },
  {
    province: "خراسان رضوی",
    cities: ["مشهد", "نیشابور", "سبزوار", "تربت حیدریه"]
  },
  {
    province: "مازندران",
    cities: ["ساری", "آمل", "بابل", "چالوس"]
  },
  {
    province: "گیلان",
    cities: ["رشت", "بندر انزلی", "لاهیجان", "آستارا"]
  },
  {
    province: "هرمزگان",
    cities: ["بندرعباس", "قشم", "کیش", "بندر لنگه"]
  },
  {
    province: "آذربایجان شرقی",
    cities: ["تبریز", "مراغه", "مرند", "جلفا"]
  }
];

nameInput.addEventListener("input", function () {
  let inputLen = nameInput.value.length;

  if (inputLen <= 3 || inputLen > 20) {
    nameInput.style.border = "1px solid #cd3030";
  } else {
    nameInput.style.border = "1px solid #00c80b";
    statusName = true
  }
});

phoneInput.addEventListener("input", function () {
  let inputLen = phoneInput.value.length;

  if (!phoneInput.value.startsWith("09") || inputLen !== 11 || isNaN(phoneInput.value)) {
    phoneInput.style.border = "1px solid #cd3030";
  } else {
    phoneInput.style.border = "1px solid #00c80b";
    statusPhone = true
  }
});
emailInput.addEventListener("input", function () {
  let inputLen = emailInput.value.length;

  if (!emailInput.value.endsWith("@gmail.com") && inputLen <= 15) {
    emailInput.style.border = "1px solid #cd3030";
  } else {
    emailInput.style.border = "1px solid #00c80b";
    statussEmail = true
  }
});

function append(add,city){
  locations.forEach(function (loca) {
    const optionElem = document.createElement("option")
    optionElem.value = loca.province
    optionElem.style.fontSize = "14px"
    optionElem.innerHTML = loca.province
    add.append(optionElem)
  })
  city.disabled = true;
}

append(originProvinceSelect,originCitySelect);
append(destinationProVinceSelect,destinationCitySelect);


function populateCities(cityselect,countryselect){
  countryselect.addEventListener("change", function () {
    const value = countryselect.value;
  
    if (value === ""){
      cityselect.disabled = true;
    } else{
      cityselect.disabled = false;
    }
  
    cityselect.innerHTML = ""
  
    const province = locations.find(function (loca) {
      return loca.province === value;
    });
  
    province.cities.forEach(function (city){
      const optionElem = document.createElement("option");
      optionElem.value = city;
      optionElem.style.fontSize = "14px";
      optionElem.innerHTML = city;
      cityselect.append(optionElem);
    });
  });
}

populateCities(originCitySelect,originProvinceSelect);
populateCities(destinationCitySelect,destinationProVinceSelect);

if (statusName && statusPhone && statussEmail){
  successBtn.disabled = false
}

cancelBtn.addEventListener("click", function () {
    originCitySelect.disabled = true;
    destinationCitySelect.disabled = true;

    originCitySelect.selectedIndex = 0;
    destinationCitySelect.selectedIndex = 0;
});