// Define UI Variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//-------------------------> Load all event Listeners function
const loadEventListeners = () => {
  // DOM Load Event
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add task Event
  form.addEventListener("submit", addTask);
  // Remove task event
  taskList.addEventListener("click", removeTask);
  // Clear task event
  clearBtn.addEventListener("click", clearTasks);
  // Filter task events
  filter.addEventListener("keyup", filterTasks);
};
// Get Tasks from localstorage
const getTasks = () => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task) => {
    //Create li element
    const li = document.createElement("li");
    // Add class
    li.className = "collection-item";
    // Create Text node and append to li
    li.appendChild(document.createTextNode(task));
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
  });
};

//---------------------->Add Task function
const addTask = (e) => {
  if (taskInput.value === "") {
    alert("Add a task");
    return false;
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
  // Store in Localstorage
  storeTaskInLocalStorage(taskInput.value);
  // Clear input
  taskInput.value = "";
  e.preventDefault();
};
//------------------------> Store Task in localstorage function
const storeTaskInLocalStorage = (task) => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//------------------------> Remove task function
const removeTask = (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("is clicked");
    if (confirm(`Are your sure?`)) {
      e.target.parentElement.parentElement.remove();
      console.log("is removed");
      //Remove from localstorage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
};
//-----------------------> Remove Task from localstorage function
const removeTaskFromLocalStorage = (taskItem) => {};

// ----------------------> Clear tasks function
const clearTasks = () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
};

//-----------------------> Filter tasks function
const filterTasks = (e) => {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
};

loadEventListeners();
