// ---------------- CART FUNCTIONALITY ----------------
// ---------------- CART FUNCTIONALITY ----------------
$(document).ready(function () {
  const csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  function updateSubtotal() {
    let total = 0;
    $(".cart-item").each(function () {
      const priceText = $(this).find(".item-price").text().replace("$", "").trim();
      const price = parseFloat(priceText) || 0;
      total += price;
    });
    $(".total-price").text(`$${total.toFixed(2)}`);
  }

  // Increase Quantity
  $(document).on("click", ".plus", function () {
    const item = $(this).closest(".cart-item");
    const itemId = item.data("id");
    const quantity = item.find(".quantity");
    const priceEl = item.find(".item-price");
    const basePrice = parseFloat(priceEl.attr("data-base")) || 0;
    let count = parseInt(quantity.text());
    count++;

    // Update UI
    quantity.text(count);
    priceEl.text(`$${(basePrice * count).toFixed(2)}`);
    updateSubtotal();

    // Update in DB
    $.post("/cart/increase-quantity", { item_id: itemId, _token: csrf_token });
  });

  // Decrease Quantity
  $(document).on("click", ".minus", function () {
    const item = $(this).closest(".cart-item");
    const itemId = item.data("id");
    const quantity = item.find(".quantity");
    const priceEl = item.find(".item-price");
    const basePrice = parseFloat(priceEl.attr("data-base")) || 0;
    let count = parseInt(quantity.text());

    if (count > 1) {
      count--;
      quantity.text(count);
      priceEl.text(`$${(basePrice * count).toFixed(2)}`);
      updateSubtotal();

      // Update in DB
      $.post("/cart/decrease-quantity", { item_id: itemId, _token: csrf_token });
    } else {
      // If last quantity → delete item
      item.remove();
      $.post("/cart/remove-item", { item_id: itemId, _token: csrf_token });
      updateSubtotal();
    }
  });

  // Delete Single Item
  $(document).on("click", ".delete-btn", function () {
    const item = $(this).closest(".cart-item");
    const itemId = item.data("id");
    item.remove();
    updateSubtotal();

    $.post("/cart/remove-item", { item_id: itemId, _token: csrf_token });
    location.reload();
  });

  // Clear All Items
  $(document).on("click", ".clear-all", function () {
    $(".cart-item").remove();
    updateSubtotal();

    $.post("/cart/clear", { _token: csrf_token });
    location.reload();
  });

  const popupContainer = $('#loadAddcart');
  const popupUrl = popupContainer.data('popup-url');
  popupContainer.load(popupUrl, function () {
    updateSubtotal();
    const openCartBtns = document.querySelectorAll('.openCartBtn');
    const cartContainer = document.querySelector('.cart-container');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.cart-overlay');

    // all open cart btn loop
    openCartBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        cartContainer.classList.add('active');
        overlay.classList.add('active');
      });
    });

    // close button
    closeBtn.addEventListener('click', () => {
      cartContainer.classList.remove('active');
      overlay.classList.remove('active');
    });

    // overlay click off
    overlay.addEventListener('click', () => {
      cartContainer.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
});

