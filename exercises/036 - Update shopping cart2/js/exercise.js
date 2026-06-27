let choice = +prompt("Please select one item\n1.Add\n2.Remove:");

let sum = 0;

const store = [
  { id: 1, title: "laptop", price: 1200, qty: 8 },
  { id: 2, title: "mouse", price: 25, qty: 30 },
  { id: 3, title: "keyboard", price: 45, qty: 20 },
  { id: 4, title: "monitor", price: 350, qty: 12 },
  { id: 5, title: "headphones", price: 80, qty: 15 },
  { id: 6, title: "usb Flash", price: 18, qty: 40 },
  { id: 7, title: "ssd", price: 140, qty: 10 },
  { id: 8, title: "webcam", price: 65, qty: 7 },
  { id: 9, title: "speaker", price: 55, qty: 18 },
  { id: 10, title: "microphone", price: 95, qty: 5 },
];

const basket = [
  { id: 1, title: "mouse", price: 25, qty: 1 },
  { id: 2, title: "keyboard", price: 45, qty: 1 },
  { id: 3, title: "usb Flash", price: 18, qty: 1 },
];

if (isNaN(choice) || (choice !== 1 && choice !== 2)) {
  alert("please enter the valid number: ");
} else {
  if (choice === 1) {
    let nameProductAdd = prompt("enter the name of the new product: ").trim().toLowerCase()
    
    let add = store.find(function (product) {
      return product.title === nameProductAdd;
    });
    let addIndexStore = store.findIndex(function (product) {
      return product.title === nameProductAdd;
    });

    if (add === undefined) {
      alert("product not found");
    } else {
      let addIndexBasket = basket.findIndex(function (product) {
        return add.title === product.title;
      });
      if (addIndexBasket !== -1) {
        if (add.qty > 0) {
          basket[addIndexBasket].qty++;
          add.qty--;
          if (add.qty === 0) {
            store.splice(addIndexStore, 1);
            store.forEach(function (product, index) {
              product.id = index + 1;
            });
          }
        }
      } else {
        if (add.qty > 0) {
          basket.push({
            id: basket.length + 1,
            title: add.title,
            price: add.price,
            qty: 1,
          });
          add.qty--;
          if (add.qty === 0) {
            store.splice(addIndexStore, 1);
            store.forEach(function (product, index) {
              product.id = index + 1;
            });
            alert("Out of stock");
          }
        }
      }
    }
  } else {
    let nameProductRemove = prompt("enter the name of the product you want to delete: ",).toLowerCase().trim();
    
    let remove = basket.find(function (product) {
      return product.title === nameProductRemove;
    });
    let addStore = store.find(function (product) {
      return product.title === nameProductRemove;
    });
    let removeIndex = basket.findIndex(function (product) {
      return product.title === nameProductRemove;
    });
    if (remove === undefined) {
      alert("product not found");
    } else {
      if (remove.qty > 1) {
        remove.qty--;
        if (addStore === undefined) {
          store.push({
            id: store.length + 1,
            title: nameProductRemove,
            price: remove.price,
            qty: 1,
          });
        } else {
          addStore.qty++;
        }
      } else {
        if (addStore === undefined) {
          store.push({
            id: store.length + 1,
            title: nameProductRemove,
            price: remove.price,
            qty: 1,
          });
        } else {
          addStore.qty++;
        }
        basket.splice(removeIndex, 1);
        basket.forEach(function (product, index) {
          product.id = index + 1;
        });
      }
    }
  }
}

basket.forEach(function (products) {
  alert(products.title + ": " + products.qty * products.price);
  sum += products.qty * products.price;
});
alert("Total: " + sum);
