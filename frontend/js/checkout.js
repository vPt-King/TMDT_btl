"use strict";

(function ($) {
  let cartItems = JSON.parse(localStorage.getItem("cart_products"));
  let $tableBody = $(".cart-table tbody");

  function updateCartDisplay() {
    localStorage.setItem("cart_products", JSON.stringify(cartItems));
    $tableBody.empty();

    let subtotal = 0;

    // Loop through each cart item and display it in the table
    $.each(cartItems, function (index, item) {
      let $row = $("<tr>");

      // Product image and title
      let $productCol = $('<td class="product-col">').html(`
      <img src="${item.img}" alt="${item.name}" />
      <div class="p-title">
        <h5>${item.name}</h5>
      </div>
    `);

      // Product price
      let $priceCol = $('<td class="price-col">').text(`${item.price}`);

      // Product quantity
      let $quantityCol = $('<td class="quantity-col">').html(`
      <div class="product-quantity">
        <div class="pro-qty">
          <input id="quantity" type="text" disabled value="${item.quantity}" />
        </div>
      </div>
    `);

      // Total price
      let $totalCol = $('<td class="total">').text(
        `${(item.price * item.quantity).toFixed(2)}`
      );

      // Add to subtotal
      subtotal += item.price * item.quantity;

      // Append all columns to the row
      $row.append($productCol, $priceCol, $quantityCol, $totalCol);

      // Append row to the table body
      $tableBody.append($row);
    });
  }

  $(document).ready(function () {
    // Open the modal
    $("#change-address-btn").click(function () {
      $("#address-modal").fadeIn();
    });

    // Close the modal when clicking on the cancel button
    $("#cancel-btn, .modal").click(function () {
      $("#address-modal").fadeOut();
    });

    // Prevent modal from closing when clicking inside the modal content
    $(".modal-content").click(function (event) {
      event.stopPropagation();
    });

    // Confirm button functionality (add your own logic)
    $("#confirm-btn").click(function () {
      // Add your confirmation logic here
      $("#address-modal").fadeOut();
    });
    updateCartDisplay();
  });
})(jQuery);
