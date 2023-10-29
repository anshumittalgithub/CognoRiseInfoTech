//javascript functions
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

// Load tasks from local storage
function loadTasks() {
    taskList.innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Add a new task
function addTask() {
    const newTask = taskInput.value.trim();
    if (newTask !== "") {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        loadTasks();
    }
}

// Edit a task
function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTask = prompt("Edit the task:", tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }
}

// Delete a task
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

// Initial load of tasks
loadTasks();