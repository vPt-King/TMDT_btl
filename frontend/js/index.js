"use strict";

(function ($) {
  $(document).ready(function () {
    // Define an array of products
    var products = [
      {
        name: "Green Dress with details",
        price: 22.9,
        image: "img/products/img-1.jpg",
        status: "new",
        category: ["Dresses", "Bags"],
      },
      {
        name: "Green Dress with details",
        price: 22.9,
        image: "img/products/img-1.jpg",
        status: "new",
        category: ["Dresses", "Bags"],
      },
      {
        name: "Green Dress with details",
        price: 22.9,
        image: "img/products/img-1.jpg",
        status: "new",
        category: ["Dresses", "Bags"],
      },
      {
        name: "Yellow Maxi Dress",
        price: 25.9,
        image: "img/products/img-2.jpg",
        status: "sale",
        category: ["Dresses", "Bags"],
      },
      {
        name: "One piece bodysuit",
        price: 19.9,
        image: "img/products/img-3.jpg",
        status: "new",
        category: ["Shoes", "Accessories"],
      },
      {
        name: "Blue Dress with details",
        price: 35.5,
        image: "img/products/img-4.jpg",
        status: "popular",
        category: ["Shoes", "Accessories"],
      },
      {
        name: "Green Dress with details",
        price: 22.9,
        image: "img/products/img-5.jpg",
        status: "new",
        category: ["Dresses", "Shoes"],
      },
      {
        name: "Yellow Maxi Dress",
        price: 25.9,
        image: "img/products/img-6.jpg",
        status: "sale",
        category: ["Accessories", "Bags"],
      },
      {
        name: "One piece bodysuit",
        price: 19.9,
        image: "img/products/img-7.jpg",
        status: "",
        category: ["Dresses", "Bags"],
      },
      {
        name: "Blue Dress with details",
        price: 35.5,
        image: "img/products/img-8.jpg",
        status: "popular",
        category: ["Accessories", "Bags"],
      },
      {
        name: "Yellow Maxi Dress",
        price: 25.9,
        image: "img/products/img-6.jpg",
        status: "sale",
        category: ["Accessories", "Bags"],
      },
      {
        name: "One piece bodysuit",
        price: 19.9,
        image: "img/products/img-7.jpg",
        status: "",
        category: ["Dresses", "Bags"],
      },
      {
        name: "Blue Dress with details",
        price: 35.5,
        image: "img/products/img-8.jpg",
        status: "popular",
        category: ["Accessories", "Bags"],
      },
      {
        name: "Yellow Maxi Dress",
        price: 25.9,
        image: "img/products/img-6.jpg",
        status: "sale",
        category: ["Accessories", "Bags"],
      },
      {
        name: "One piece bodysuit",
        price: 19.9,
        image: "img/products/img-7.jpg",
        status: "",
        category: ["Dresses", "Bags"],
      },
      {
        name: "Blue Dress with details",
        price: 35.5,
        image: "img/products/img-8.jpg",
        status: "popular",
        category: ["Accessories", "Bags"],
      },
      {
        name: "Blue Dress with details",
        price: 35.5,
        image: "img/products/img-8.jpg",
        status: "popular",
        category: ["Accessories", "Bags"],
      },
      {
        name: "Blue Dress with details",
        price: 35.5,
        image: "img/products/img-8.jpg",
        status: "popular",
        category: ["Accessories", "Bags"],
      },
      {
        name: "Blue Dress with details",
        price: 35.5,
        image: "img/products/img-8.jpg",
        status: "popular",
        category: ["Accessories", "Bags"],
      },
    ];

    // AJAX request to get the products
    $.ajax({
      url: "https://api.example.com/products",
      method: "GET",
      dataType: "json",
      success: function (data) {
        // Assuming the response is an array of products
        products = data;
        localStorage.setItem("AllProducts", JSON.stringify(products));
      },
      error: function (error) {
        console.error("Error fetching products:", error);
      },
    });

    localStorage.setItem("AllProducts", JSON.stringify(products));

    // Loop through products array and generate HTML
    // Function to display products based on selected category
    function displayProducts(category) {
      $("#product-list").empty(); // Clear previous products

      var displayedProducts = 0;

      products.forEach(function (product, index) {
        displayedProducts++;
        if (displayedProducts > 16) {
          return;
        }

        if (category === "*" || product.category.includes(category)) {
          var productHTML =
            '<div class="col-lg-3 col-sm-6 mix all ' +
            product.category.join(" ") +
            '">';
          productHTML +=
            '<div class="single-product-item" data-index="' + index + '">';
          productHTML +=
            '<figure><a href="product-page.html"><img src="' +
            product.image +
            '" alt="" /></a>';
          if (product.status) {
            productHTML +=
              '<div class="p-status ' +
              product.status +
              '">' +
              product.status +
              "</div>";
          }
          productHTML += '</figure><div class="product-text">';
          productHTML += "<h6>" + product.name + "</h6>";
          productHTML += "<p> $" + product.price + "</p>";
          productHTML += "</div></div></div>";

          $("#product-list").append(productHTML);
        }
      });
    }

    // Display all products initially
    displayProducts("*");

    // Filter products when a category is clicked
    $(".product-controls li").click(function () {
      var filterValue = $(this).data("filter");
      console.log(filterValue);
      displayProducts(filterValue);
    });

    // When a user clicks on a product
    $(".single-product-item").click(function () {
      var productIndex = $(this).data("index"); // Get the index of the clicked product
      console.log(productIndex);
      var product = products[productIndex]; // Get the product object from the products array
      localStorage.setItem("selectedProduct", JSON.stringify(product)); // Store the selected product in local storage
    });
  });
})(jQuery);
