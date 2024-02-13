
let currentIndex = 0;
let totalAmount = 0;
let cart = [];


function disAddedItems() {
  let addedItems = document.querySelector(".added-items");
  addedItems.innerHTML = ""; 
  if (cart.length === 0) {
    const li = document.createElement("li");
    li.textContent = `no items added yet`;
    addedItems.appendChild(li);
  } else {
    cart.forEach((cartItem, index) => {
      const li = document.createElement("li");
      li.textContent = ` ${cartItem.name}  ${cartItem.price}`;
      addedItems.appendChild(li);
    });
  }
}

disAddedItems();

const services = [
  { name: "Leather and suede cleaning", price: 150, image: "service2.jpg" },
  { name: "wedding dress cleaning", price: 250, image: "service3.jpeg" },
  { name: "ironing", price: 350, image: "service4.jpeg" },
  { name: "wash and fold", price: 450, image: "service5.jpeg" },
  { name: "Dry Cleaning", price: 50, image: "service1.jpg" },
  { name: "Stain removal", price: 550, image: "service6.jpg" },
];

function addItem(serviceName, price) {
  const item = {
    name : services[currentIndex].name,
    price : services[currentIndex].price
  };
  cart.push(item);
  updateTotalAmount(services[currentIndex].price);
  disAddedItems();
  displayNextService();
}

function skipItem() {
  displayNextService();
}

function displayNextService() {
  if (currentIndex < services.length) {
    const currentService = services[currentIndex];
    document.querySelector(".service-names").textContent = currentService.name;
    document.querySelector(
      ".service-prices"
    ).textContent = `₹${currentService.price}`;
    document.querySelector(".service-images").src = currentService.image;
  }
  currentIndex++;
}

function updateTotalAmount(price) {
  totalAmount += price;
  document.getElementById("total-amount").textContent = `₹${totalAmount}`;
}

displayNextService();

function bookNow() {
  let fullName = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let messageElement = document.getElementById("message");

  if (fullName === "" || email === "" || phoneNumber === "") {
    document.getElementById("message").innerHTML =
      " Add the items to the cart to book.";
      messageElement.classList.add("error");
  } else {
    document.getElementById("message").innerHTML =
      "Thank you for contacting. We will get back to you soon.";
      messageElement.classList.add("success");
  }
}

document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    bookNow(); // Call bookNow function to handle submission
  });



