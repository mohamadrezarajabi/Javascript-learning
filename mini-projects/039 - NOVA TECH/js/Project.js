const products = [
  // =========================
  // Mobile | موبایل
  // =========================

  {
    id: 1,
    name: "iPhone 16 Pro Max",
    category: "mobile",
    categoryLabel: "موبایل",
    image: "images/image.webp",
    rating: 4.9,
    reviews: 1250,
    price: 89900000,
    oldPrice: 99900000,
    discountPercent: 10,
    inStock: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra",
    category: "mobile",
    categoryLabel: "موبایل",
    image: "images/image copy.webp",
    rating: 4.8,
    reviews: 980,
    price: 84900000,
    inStock: true,
  },
  {
    id: 3,
    name: "iPhone 15 PRO MAX",
    category: "mobile",
    categoryLabel: "موبایل",
    image: "images/image copy 2.webp",
    rating: 4.7,
    reviews: 720,
    price: 52900000,
    oldPrice: 57900000,
    discountPercent: 9,
    inStock: true,
  },
  {
    id: 4,
    name: "Xiaomi 14T Pro",
    category: "mobile",
    categoryLabel: "موبایل",
    image: "images/image copy 3.webp",
    rating: 4.6,
    reviews: 540,
    price: 39900000,
    inStock: true,
  },
  {
    id: 5,
    name: "Samsung Galaxy A55",
    category: "mobile",
    categoryLabel: "موبایل",
    image: "images/image copy 4.webp",
    rating: 4.5,
    reviews: 860,
    price: 24900000,
    oldPrice: 27900000,
    discountPercent: 11,
    inStock: true,
  },
  {
    id: 6,
    name: "Google Pixel 9 Pro",
    category: "mobile",
    categoryLabel: "موبایل",
    image: "images/image copy 5.webp",
    rating: 4.8,
    reviews: 430,
    price: 69900000,
    inStock: false,
  },

  // =========================
  // Laptop | لپ‌تاپ
  // =========================

  {
    id: 7,
    name: "MacBook Pro M4",
    category: "laptop",
    categoryLabel: "لپ‌تاپ",
    image: "images/image copy 6.webp",
    rating: 4.9,
    reviews: 650,
    price: 159900000,
    inStock: true,
  },
  {
    id: 8,
    name: "MacBook Air M3",
    category: "laptop",
    categoryLabel: "لپ‌تاپ",
    image: "images/image copy 7.webp",
    rating: 4.8,
    reviews: 890,
    price: 89900000,
    oldPrice: 99900000,
    discountPercent: 10,
    inStock: true,
  },
  {
    id: 9,
    name: "ASUS ROG Strix G16",
    category: "laptop",
    categoryLabel: "لپ‌تاپ",
    image: "images/image copy 8.webp",
    rating: 4.7,
    reviews: 340,
    price: 119900000,
    inStock: true,
  },
  {
    id: 10,
    name: "Lenovo Legion 5",
    category: "laptop",
    categoryLabel: "لپ‌تاپ",
    image: "images/image copy 9.webp",
    rating: 4.6,
    reviews: 520,
    price: 89900000,
    oldPrice: 99900000,
    discountPercent: 10,
    inStock: true,
  },
  {
    id: 11,
    name: "HP Pavilion 15",
    category: "laptop",
    categoryLabel: "لپ‌تاپ",
    image: "images/image copy 10.webp",
    rating: 4.4,
    reviews: 290,
    price: 45900000,
    inStock: true,
  },
  {
    id: 12,
    name: "Dell XPS 15",
    category: "laptop",
    categoryLabel: "لپ‌تاپ",
    image: "images/image copy 11.webp",
    rating: 4.8,
    reviews: 410,
    price: 139900000,
    inStock: false,
  },

  // =========================
  // Headphone | هدفون
  // =========================

  {
    id: 13,
    name: "Sony WH-1000XM5",
    category: "headphone",
    categoryLabel: "هدفون",
    image: "images/image copy 12.webp",
    rating: 4.7,
    reviews: 640,
    price: 14900000,
    inStock: true,
  },
  {
    id: 14,
    name: "Apple AirPods Pro 2",
    category: "headphone",
    categoryLabel: "هدفون",
    image: "images/image copy 13.webp",
    rating: 4.9,
    reviews: 1100,
    price: 11900000,
    oldPrice: 13900000,
    discountPercent: 14,
    inStock: true,
  },
  {
    id: 15,
    name: "Samsung Galaxy Buds3 Pro",
    category: "headphone",
    categoryLabel: "هدفون",
    image: "images/image copy 14.webp",
    rating: 4.6,
    reviews: 480,
    price: 8900000,
    inStock: true,
  },
  {
    id: 16,
    name: "JBL Tune 770NC",
    category: "headphone",
    categoryLabel: "هدفون",
    image: "images/image copy 15.webp",
    rating: 4.5,
    reviews: 370,
    price: 4900000,
    oldPrice: 5900000,
    discountPercent: 17,
    inStock: true,
  },
  {
    id: 17,
    name: "Logitech G Pro X",
    category: "headphone",
    categoryLabel: "هدفون",
    image: "images/image copy 16.webp",
    rating: 4.7,
    reviews: 520,
    price: 7900000,
    inStock: true,
  },
  {
    id: 18,
    name: "Razer BlackShark V2",
    category: "headphone",
    categoryLabel: "هدفون",
    image: "images/image copy 17.webp",
    rating: 4.5,
    reviews: 310,
    price: 6500000,
    inStock: false,
  },
  {
    id: 19,
    name: "Nothing Ear",
    category: "headphone",
    categoryLabel: "هدفون",
    image: "images/image copy 18.webp",
    rating: 4.6,
    reviews: 290,
    price: 5600000,
    inStock: true,
  },
  {
    id: 20,
    name: "Anker Soundcore Q45",
    category: "headphone",
    categoryLabel: "هدفون",
    image: "images/image copy 19.webp",
    rating: 4.4,
    reviews: 450,
    price: 4200000,
    oldPrice: 4900000,
    discountPercent: 14,
    inStock: true,
  },

  // =========================
  // Smartwatch | ساعت هوشمند
  // =========================

  {
    id: 21,
    name: "Apple Watch Series 10",
    category: "watch",
    categoryLabel: "ساعت هوشمند",
    image: "images/image copy 20.webp",
    rating: 4.8,
    reviews: 980,
    price: 16900000,
    oldPrice: 19900000,
    discountPercent: 15,
    inStock: true,
  },
  {
    id: 22,
    name: "Samsung Galaxy Watch 7",
    category: "watch",
    categoryLabel: "ساعت هوشمند",
    image: "images/image copy 21.webp",
    rating: 4.7,
    reviews: 670,
    price: 11900000,
    inStock: true,
  },
  {
    id: 23,
    name: "Apple Watch Ultra 2",
    category: "watch",
    categoryLabel: "ساعت هوشمند",
    image: "images/image copy 22.webp",
    rating: 4.9,
    reviews: 540,
    price: 29900000,
    inStock: true,
  },
  {
    id: 24,
    name: "Xiaomi Watch 2 Pro",
    category: "watch",
    categoryLabel: "ساعت هوشمند",
    image: "images/image copy 23.webp",
    rating: 4.5,
    reviews: 380,
    price: 7900000,
    oldPrice: 8900000,
    discountPercent: 11,
    inStock: true,
  },
  {
    id: 25,
    name: "Huawei Watch GT 5",
    category: "watch",
    categoryLabel: "ساعت هوشمند",
    image: "images/image copy 24.webp",
    rating: 4.6,
    reviews: 460,
    price: 8900000,
    inStock: false,
  },
  {
    id: 26,
    name: "Amazfit GTR 4",
    category: "watch",
    categoryLabel: "ساعت هوشمند",
    image: "images/image copy 25.webp",
    rating: 4.4,
    reviews: 320,
    price: 5900000,
    inStock: true,
  },

  // =========================
  // Tablet | تبلت
  // =========================

  {
    id: 27,
    name: "iPad Air M2",
    category: "tablet",
    categoryLabel: "تبلت",
    image: "images/image copy 26.webp",
    rating: 4.8,
    reviews: 720,
    price: 32900000,
    inStock: true,
  },
  {
    id: 28,
    name: "iPad Pro M4",
    category: "tablet",
    categoryLabel: "تبلت",
    image: "images/image copy 27.webp",
    rating: 4.9,
    reviews: 510,
    price: 59900000,
    oldPrice: 64900000,
    discountPercent: 8,
    inStock: true,
  },
  {
    id: 29,
    name: "Samsung Galaxy Tab S9",
    category: "tablet",
    categoryLabel: "تبلت",
    image: "images/image copy 28.webp",
    rating: 4.7,
    reviews: 430,
    price: 28900000,
    inStock: true,
  },
  {
    id: 30,
    name: "Xiaomi Pad 6",
    category: "tablet",
    categoryLabel: "تبلت",
    image: "images/image copy 29.webp",
    rating: 4.5,
    reviews: 610,
    price: 15900000,
    oldPrice: 17900000,
    discountPercent: 11,
    inStock: true,
  },
  {
    id: 31,
    name: "Lenovo Tab P12",
    category: "tablet",
    categoryLabel: "تبلت",
    image: "images/image copy 30.webp",
    rating: 4.3,
    reviews: 280,
    price: 12900000,
    inStock: false,
  },

  // =========================
  // Accessories | لوازم جانبی
  // =========================

  {
    id: 32,
    name: "Logitech MX Master 3S",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    image: "images/image copy 31.webp",
    rating: 4.7,
    reviews: 1250,
    price: 9900000,
    inStock: true,
  },
  {
    id: 33,
    name: "Apple Magic Keyboard",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    image: "images/image copy 32.webp",
    rating: 4.6,
    reviews: 540,
    price: 8900000,
    oldPrice: 9900000,
    discountPercent: 10,
    inStock: true,
  },
  {
    id: 34,
    name: "Samsung T7 SSD 1TB",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    image: "images/image copy 33.webp",
    rating: 4.8,
    reviews: 870,
    price: 6900000,
    inStock: true,
  },
  {
    id: 35,
    name: "Anker 737 Power Bank",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    image: "images/image copy 34.webp",
    rating: 4.7,
    reviews: 430,
    price: 5900000,
    inStock: true,
  },
  {
    id: 36,
    name: "Baseus GaN Charger 65W",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    image: "images/image copy 35.webp",
    rating: 4.5,
    reviews: 690,
    price: 1900000,
    oldPrice: 2300000,
    discountPercent: 17,
    inStock: true,
  },
  {
    id: 37,
    name: "Logitech G502 X",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    image: "images/image copy 36.webp",
    rating: 4.8,
    reviews: 760,
    price: 4900000,
    inStock: true,
  },
  {
    id: 38,
    name: "Samsung 990 PRO 2TB",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    image: "images/image copy 37.webp",
    rating: 4.9,
    reviews: 390,
    price: 11900000,
    inStock: false,
  },
  {
    id: 39,
    name: "Sony DualSense Controller",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    image: "images/image copy 38.webp",
    rating: 4.7,
    reviews: 920,
    price: 3900000,
    oldPrice: 4500000,
    discountPercent: 13,
    inStock: true,
  },
  {
    id: 40,
    name: "UGREEN USB-C Hub 9-in-1",
    category: "accessory",
    categoryLabel: "لوازم جانبی",
    image: "images/image copy 39.webp",
    rating: 4.4,
    reviews: 260,
    price: 2900000,
    inStock: true,
  },
];

const basket = JSON.parse(localStorage.getItem("basket")) || {};
const shopingCard = document.querySelector(".shoping-card");

const ulElem = document.querySelector(".cards-ul");
const categorySelect = document.querySelector('[name="category"]');
const sortSelect = document.querySelector('[name="sort"]');
const availabilityFilter = document.querySelector(".availability-filter input");
const clearFilters = document.querySelector(".clear-filters");

function saveBasket() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function formatNumber(number) {
  return new Intl.NumberFormat("fa-IR").format(number);
}

function formatPrice(price) {
  return `${formatNumber(price)} تومان`;
}

function renderProducts() {
  const selectedCategory = categorySelect.value;
  const selectedSort = sortSelect.value;

  let filteredProducts = [...products];

  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(function (product) {
      return product.category === selectedCategory;
    });
  }

  if (availabilityFilter.checked) {
    filteredProducts = filteredProducts.filter(function (product) {
      return product.inStock === true;
    });
  }

  if (selectedSort === "default") {
    for (let i = filteredProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [filteredProducts[i], filteredProducts[j]] = [
        filteredProducts[j],
        filteredProducts[i],
      ];
    }
  }

  switch (selectedSort) {
    case "cheapest":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "expensive":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "popular":
      filteredProducts.sort((a, b) => b.reviews - a.reviews);
      break;

    case "newest":
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
  }

  ulElem.innerHTML = "";

  filteredProducts.forEach(function (product) {
    const quantity = basket[product.id] || 0;
    ulElem.insertAdjacentHTML(
      "beforeend",
      `
        <li class="card-li" data-id="${product.id}">
          <span class="card-category">${product.categoryLabel}</span>

          <div class="card-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>

          <h3 class="card-title" dir="ltr">${product.name}</h3>

          <div class="card-rating" dir="rtl">
            <span class="rating-score">${formatNumber(product.rating)}</span>
            <span class="rating-star" aria-hidden="true">★</span>
            <span class="rating-reviews">(${formatNumber(product.reviews)} نظر)</span>
          </div>

          <div class="card-price" dir="rtl">
            ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
            <strong>${formatPrice(product.price)}</strong>
            ${product.discountPercent ? `<span class="discount-badge">${formatNumber(product.discountPercent)}٪</span>` : ""}
          </div>

          ${
            quantity !== 0
              ? ` <div class="append-product">
                    <div class="minus"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus preview-icon"><path d="M5 12h14"/></svg></div>
                    <p class="count-product">${quantity}</p>
                    <div class="plus"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus preview-icon"><path d="M5 12h14"/><path d="M12 5v14"/></svg></div>
                  </div>`
              : ` <button class="card-add-button" type="button" data-id='${product.id}'>
                    <span>افزودن به سبد خرید</span>
                  </button>`
          }
          

          <button class="card-details-button" type="button" data-id='${product.id}'>
            <span>مشاهده جزئیات</span>
          </button>
        </li>
      `,
    );
  });
}

categorySelect.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);
availabilityFilter.addEventListener("change", renderProducts);
clearFilters.addEventListener("click", function () {
  categorySelect.value = "all";
  sortSelect.value = "default";
  availabilityFilter.checked = false;
  renderProducts();
});

renderProducts();
updateBasketCount();

function updateBasketCount() {
  let total = 0;

  Object.values(basket).forEach(function (num) {
    total += num;
  });

  shopingCard.dataset.count = total;

  if (total === 0) {
    shopingCard.dataset.show = "hidden";
  } else {
    shopingCard.dataset.show = "visible";
  }
}

ulElem.addEventListener("click", function (event) {
  const cardAdd = event.target.closest(".card-add-button");
  const plus = event.target.closest(".plus");
  const minus = event.target.closest(".minus");

  const card = event.target.closest(".card-li");

  if (!card) return;

  const productId = card.dataset.id;

  if (cardAdd) {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = `
      <div class="append-product">
        <div class="minus">-</div>
        <p class="count-product">1</p>
        <div class="plus">+</div>
      </div>
    `;

    cardAdd.replaceWith(wrapper.firstElementChild);

    basket[productId] = 1;

    saveBasket();
    updateBasketCount();
    return;
  }

  if (plus) {
    basket[productId]++;

    card.querySelector(".count-product").textContent = basket[productId];

    saveBasket();
    updateBasketCount();
    return;
  }

  if (minus) {
    basket[productId]--;

    if (basket[productId] === 0) {
      delete basket[productId];

      const button = document.createElement("button");
      button.className = "card-add-button";
      button.type = "button";
      button.dataset.id = productId;
      button.innerHTML = `<span>افزودن به سبد خرید</span>`;

      card.querySelector(".append-product").replaceWith(button);
    } else {
      card.querySelector(".count-product").textContent = basket[productId];
    }

    saveBasket();
    updateBasketCount();
  }

  const detailsButton = event.target.closest(".card-details-button");

  if (detailsButton) {
    const productId = detailsButton.dataset.id;

    window.location.href = `product.html?id=${productId}`;
  }
});
