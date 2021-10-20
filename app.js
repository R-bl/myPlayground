// Define UI Variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners

// Load all event Listeners function
const loadEventListeners = () => {
  // Add Task Event
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
};
//Add Task function
const addTask = (e) => {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //Create li element
  const li = document.createElement("li");
  // Add class
  li.className = "collection-item";
  // Create Text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  // Clear input
  taskInput.value = "";
  e.preventDefault();
};
// Remove task function
const removeTask = (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("is clicked");
    if (confirm("Are your sure?")) {
      e.target.parentElement.parentElement.remove();
      console.log("is removed");
    }
  }
};

loadEventListeners();
