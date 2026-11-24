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
