const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));
const product = products.find(function (item) {
  return item.id === productId;
});

const productContent = document.querySelector("#product-content");
const productNotice = document.querySelector("#product-notice");
const basket = JSON.parse(localStorage.getItem("basket")) || {};
const cartCount = document.querySelector(".product-cart-count");
const quantityValue = document.querySelector("#quantity-value");
const addButton = document.querySelector("#add-to-basket");
const feedback = document.querySelector("#product-feedback");
let quantity = Math.max(1, basket[productId] || 1);

function formatNumber(value) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

function formatPrice(value) {
  return formatNumber(value) + " تومان";
}

function updateCartCount() {
  const total = Object.values(basket).reduce(function (sum, value) {
    return sum + value;
  }, 0);
  cartCount.textContent = formatNumber(total);
  cartCount.dataset.count = total;
}

function updateQuantity() {
  quantityValue.textContent = formatNumber(quantity);
}

function renderProduct() {
  if (!product) {
    productContent.hidden = true;
    productNotice.hidden = false;
    return;
  }

  document.title = product.name + " | NOVA TECH";
  document.querySelector("#breadcrumb-category").textContent = product.categoryLabel;
  document.querySelector("#breadcrumb-name").textContent = product.name;
  document.querySelector("#product-category").textContent = product.categoryLabel;
  document.querySelector("#product-name").textContent = product.name;
  document.querySelector("#product-image").src = product.image;
  document.querySelector("#product-image").alt = product.name;
  document.querySelector("#rating-value").textContent = formatNumber(product.rating);
  document.querySelector("#review-count").textContent = "(" + formatNumber(product.reviews) + " نظر)";
  document.querySelector("#fact-category").textContent = product.categoryLabel;
  document.querySelector("#fact-stock").textContent = product.inStock ? "موجود" : "ناموجود";
  document.querySelector("#fact-id").textContent = product.id;

  const stock = document.querySelector("#product-stock");
  stock.textContent = product.inStock ? "موجود در فروشگاه" : "ناموجود";
  stock.classList.toggle("is-unavailable", !product.inStock);

  const priceArea = document.querySelector("#product-price-area");
  priceArea.innerHTML =
    (product.oldPrice ? '<span class="previous-price">' + formatPrice(product.oldPrice) + '</span>' : "") +
    '<strong class="current-price">' + formatNumber(product.price) + '</strong>' +
    '<span class="price-unit">تومان</span>' +
    (product.discountPercent ? '<span class="product-discount">' + formatNumber(product.discountPercent) + '٪ تخفیف</span>' : "");

  if (!product.inStock) {
    addButton.disabled = true;
    addButton.textContent = "در حال حاضر ناموجود";
    document.querySelector("#quantity-plus").disabled = true;
    document.querySelector("#quantity-minus").disabled = true;
  }

  updateQuantity();
  updateCartCount();
}

document.querySelector("#quantity-plus").addEventListener("click", function () {
  if (!product || !product.inStock) return;
  quantity++;
  updateQuantity();
});

document.querySelector("#quantity-minus").addEventListener("click", function () {
  if (!product || !product.inStock) return;
  quantity = Math.max(1, quantity - 1);
  updateQuantity();
});

addButton.addEventListener("click", function () {
  if (!product || !product.inStock) return;
  basket[productId] = (basket[productId] || 0) + quantity;
  localStorage.setItem("basket", JSON.stringify(basket));
  updateCartCount();
  feedback.textContent = "محصول به سبد خرید اضافه شد.";
});

renderProduct();
