// script.js

// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array called tasks.
// TODO: Call the render function to update the table with the new tasks.

// Section 2: App State Variables
let tasks = [];

// Section 3: Cached Element References
const taskForm = document.getElementById('taskForm');
const taskTable = document.getElementById('taskTable');

console.log(taskForm);  //testing elements above
console.log(taskTable);

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();

    // TODO: Get form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    // TODO: Validate input fields
    if (!taskName || !taskDeadline) {
        alert('Task name and deadline are required!');
        return;
    }

    // TODO: Update the tasks array
    tasks.push({
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline,
    });

    render();
}

// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the array
    taskTable.innerHTML = ''; // Clear the table

    tasks.forEach(function (task, index) {
        const row = taskTable.insertRow();

        const cellIndex = row.insertCell(0);
        cellIndex.textContent = index + 1;

        const cellName = row.insertCell(1);
        cellName.textContent = task.name;

        const cellDescription = row.insertCell(2);
        cellDescription.textContent = task.description;

        const cellDeadline = row.insertCell(3);
        cellDeadline.textContent = task.deadline;

        const cellActions = row.insertCell(4);
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            removeTask(index);
        });
        cellActions.appendChild(removeButton);
    });
}

// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}



