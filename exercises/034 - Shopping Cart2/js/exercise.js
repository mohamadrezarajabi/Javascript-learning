const products = [
  { id: 1, title: "mobile", price: 80, qty: 90 },
  { id: 2, title: "laptop", price: 200, qty: 15 },
  { id: 3, title: "head-phone", price: 150, qty: 12 },
  { id: 4, title: "ram", price: 6000000, qty: 0 },
  { id: 5, title: "milk", price: 30, qty: 13 },
];

const basket = [
  { id: 1, title: "milk", price: 30 },
  { id: 2, title: "laptop", price: 200 },
  { id: 3, title: "head-phone", price: 150 },
];

const userProductTitle = prompt("Enter The Product Title:").trim().toLocaleLowerCase();

if (userProductTitle.length > 0) {
  const isInShop = products.some(function (product) {
    return product.title === userProductTitle && product.qty > 0;
  });

  if (isInShop === true) {
    let basketNewProduct = {
      id: basket.length + 1,
      title: userProductTitle,
    };

    products.forEach(function (product) {
      if (product.title === userProductTitle) {
        basketNewProduct.price = product.price;
      }
    });

    basket.push(basketNewProduct);

    let totalPrice = 0;
    basket.forEach(function (product) {
      totalPrice += product.price;
    });

    alert("Your purchase amout" + totalPrice);

    console.log("Basket ->", basket);
  } else {
    alert("Product not found");
  }
} else {
  alert("Please Enter the name product");
}
