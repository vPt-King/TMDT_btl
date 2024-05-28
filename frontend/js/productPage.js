"use strict";

(function ($) {
  $(document).ready(function () {
    var selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

    // Use the product information as needed
    console.log(selectedProduct);
    // Use the product information to populate the product page
    $("#product-name").text(selectedProduct.name);
    $("#product-price").text("$" + selectedProduct.price);
    $(".product-img img").attr("src", selectedProduct.image);
    if (selectedProduct.status) {
      $(".p-status")
        .addClass(selectedProduct.status)
        .text(selectedProduct.status);
    }
    // Add to cart button click event
    $("#add-to-cart").click(function (event) {
      event.preventDefault(); // Prevent default action

      // Retrieve existing cart items from local storage or initialize an empty array
      var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if the selected product already exists in the cart
      var existingItem = cartItems.find(function (item) {
        return item.name === selectedProduct.name;
      });

      if (existingItem) {
        // If the product already exists in the cart, increase its quantity
        existingItem.quantity += parseInt($("#quantity").val());
      } else {
        // If the product is not already in the cart, add it with a quantity of 1
        selectedProduct.quantity = parseInt($("#quantity").val());
        cartItems.push(selectedProduct);
      }

      // Save the updated cart items back to local storage
      localStorage.setItem("cart", JSON.stringify(cartItems));
      console.log("Cart Items:", cartItems);
      $(".header-right a[href='./shopping-cart.html'] span").text(
        cartItems.length
      );
      // Optional: You can provide feedback to the user that the product has been added to the cart
      alert("Product added to cart!");
    });
  });
})(jQuery);
