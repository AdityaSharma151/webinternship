function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();
  if (task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.unshift(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
  }
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

// Product Listing Functionality
const products = [
  { name: "Laptop", category: "tech", price: 800, rating: 4.5 },
  { name: "Smartphone", category: "tech", price: 600, rating: 4.2 },
  { name: "JavaScript Book", category: "books", price: 40, rating: 4.8 },
  { name: "Data Science Handbook", category: "books", price: 50, rating: 4.6 }
];

function displayProducts(items) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-item";
    div.innerHTML = `<strong>${p.name}</strong><br>Category: ${p.category} | Price: $${p.price} | Rating: ${p.rating}`;
    list.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const sortBy = document.getElementById("sortFilter").value;
  let sorted = [...products];
  if (sortBy === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "price") {
    sorted.sort((a, b) => a.price - b.price);
  }
  displayProducts(sorted);
}

// Initialize
window.onload = function () {
  loadTasks();
  displayProducts(products);
};