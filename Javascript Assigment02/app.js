const inputBox = document.getElementById("inputBox");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");
const clearButton = document.getElementById("clearButton");

// Add new to-do item to list
function addToList() {
  const newItem = document.createElement("li");
  newItem.innerText = inputBox.value;
  newItem.addEventListener("click", toggleCompleted);
  list.appendChild(newItem);
  inputBox.value = "";
}

// Toggle completed state of to-do item
function toggleCompleted() {
  this.classList.toggle("completed");
}

// Clear all completed to-do items
function clearCompleted() {
  const completedItems = document.getElementsByClassName("completed");
  while (completedItems.length > 0) {
    completedItems[0].parentNode.removeChild(completedItems[0]);
  }
}

// Event listeners for buttons
addButton.addEventListener("click", function(e) {
  e.preventDefault();
  if (inputBox.value !== "") {
    addToList();
  }
});

inputBox.addEventListener("keypress", function(e) {
  if (e.key === "Enter" && inputBox.value !== "") {
    addToList();
  }
});

clearButton.addEventListener("submit", clearCompleted);
