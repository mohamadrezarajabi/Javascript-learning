const store = [
  { id: 1, title: "laptop", price: 85000 },
  { id: 2, title: "monitor", price: 120000 },
  { id: 3, title: "keyboard", price: 25000 },
  { id: 4, title: "mouse", price: 18000 },
  { id: 5, title: "headphone", price: 145000 },
  { id: 6, title: "speaker", price: 95000 },
  { id: 7, title: "webcam", price: 70000 },
  { id: 8, title: "ssd", price: 160000 },
  { id: 9, title: "flash", price: 30000 },
  { id: 10, title: "microphone", price: 220000 },
];

const basket = [
  { id: 1, title: "laptop", price: 85000 },
  { id: 2, title: "keyboard", price: 25000 },
  { id: 3, title: "headphone", price: 145000 },
  { id: 4, title: "flash", price: 30000 },
  { id: 5, title: "mouse", price: 18000 },
  { id: 6, title: "speaker", price: 95000 },
];

let postage = 0;
let total = 0;

basket.forEach(function (basket) {
  total += basket.price;
  if (basket.price < 100000) {
    postage += 1000;
  }
  console.log(basket.title + ": " + basket.price);
  console.log("---------------------------------");
});
console.log("Amount excluding postage: " + total);
console.log("Postage: " + postage);
console.log("total: " + (total + postage));
