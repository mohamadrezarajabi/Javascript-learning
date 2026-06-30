const provinces = [
  {id: 1, province: "tehran", cities: ["tehran","karaj","shahriar","damavand","varamin"]},
  {id: 2, province: "isfahan", cities: ["isfahan","kashan","najafabad","golpayegan","shahin shahr"]},
  {id: 3, province: "fars", cities: ["shiraz","jahrom","marvdasht","lar","fasa"]},
  {id: 4, province: "khorasan razavi", cities: ["mashhad","neyshabur","sabzevar","torbat heydarieh","chenaran"]},
  {id: 5, province: "east azerbaijan", cities: ["tabriz","maragheh","marand","bonab","ahar"]},
  {id: 6, province: "mazandaran", cities: ["sari","babol","amol","qaemshahr","nowshahr"]},
  {id: 7, province: "gilan", cities: ["rasht","anzali","lahijan","roudbar","astara"]},
  {id: 8, province: "khuzestan", cities: ["ahvaz","abadan","khorramshahr","dezful","behbahan"]},
  {id: 9, province: "kerman", cities: ["kerman","sirjan","rafsanjan","bam","jiroft"]},
  {id: 10, province: "yazd", cities: ["yazd","ardakan","meybod","taft","abarkuh"]}
];

let nameCity = prompt("Enter the name of the province: ").trim().toLocaleLowerCase()

let foundProvince = provinces.find(function (province){
  return nameCity === province.province
})

if (foundProvince === undefined) {
  console.log("Province not found");
} else {
  console.log(foundProvince.province);
  console.log("----------------");

  foundProvince.cities.forEach(function (city, index) {
    console.log((index + 1) + " : " + city);
  });
}