// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const formMsg = document.getElementById('formMsg');

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "Form submitted successfully!";
  formMsg.style.color = "green";

  this.reset();
});

// Todo List
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.innerHTML = `${task} <button onclick="this.parentElement.remove()">Delete</button>`;
  todoList.appendChild(li);
  todoInput.value = '';
});
