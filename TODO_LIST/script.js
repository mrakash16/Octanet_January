// Task counter for unique IDs
let taskIdCounter = 0;

document.getElementById("newTask").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = document.getElementById("newTask").value;
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create task element
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.id = "task-" + taskIdCounter;

    // Task checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox-" + taskIdCounter;
    checkbox.addEventListener("change", () => {
        toggleTaskStatus(taskElement.id);
    });

    // Task label
    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = taskText;

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        deleteTask(taskElement.id);
    });

    // Append elements to task
    taskElement.appendChild(checkbox);

    // Create a container for the checkbox and label
    const checkboxLabelContainer = document.createElement("div");
    checkboxLabelContainer.className = "checkbox-label";

    // Append label to the container
    checkboxLabelContainer.appendChild(label);

    // Append the container to the task
    taskElement.appendChild(checkboxLabelContainer);

    // Append delete button to task
    taskElement.appendChild(deleteButton);

    // Append task to task list
    taskList.appendChild(taskElement);

    // Clear input field
    document.getElementById("newTask").value = "";

    // Increment task ID counter
    taskIdCounter++;
}

function toggleTaskStatus(taskId) {
    const taskElement = document.getElementById(taskId);
    const checkbox = taskElement.querySelector('input[type="checkbox"]');
    const isCompleted = checkbox.checked;

    if (isCompleted) {
        taskElement.classList.add("completed");
    } else {
        taskElement.classList.remove("completed");
    }
}

function deleteTask(taskId) {
    const taskElement = document.getElementById(taskId);
    taskElement.remove();
}
