// document.getElementById('addTaskButton').addEventListener('click', function() {
//     let taskInput = document.getElementById('taskInput');
//     let taskText = taskInput.value.trim();

//     if (taskText !== '') {
//         let taskListContainer = document.getElementById('taskListContainer');

//         let taskItem = document.createElement('div');
//         taskItem.className = 'taskItem';

//         let taskContent = document.createElement('span');
//         taskContent.textContent = taskText;

//         let deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.className = 'deleteButton';

//         deleteButton.addEventListener('click', function() {
//             taskListContainer.removeChild(taskItem);
//         });

//         taskItem.appendChild(taskContent);
//         taskItem.appendChild(deleteButton);

//         taskListContainer.appendChild(taskItem);

//         taskInput.value = '';
//     }
// });
// Initialize an empty array to store tasks
// Initialize an empty array to store tasks
let tasks = [];

// Function to render tasks from the array
function renderTasks() {
    const taskListContainer = document.getElementById('taskListContainer');
    taskListContainer.innerHTML = ''; // Clear the existing task list

    tasks.forEach((task, index) => {
        // Create a new task item
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        // Create a span for the task text with numbering
        const taskText = document.createElement('span');
        taskText.textContent = `${index + 1}. ${task}`; // Adding numbering before task text

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';

        // Add event listener to delete button
        deleteButton.addEventListener('click', function() {
            tasks.splice(index, 1); // Remove the task from the array
            renderTasks(); // Re-render the task list
        });

        // Append task text and delete button to the task item
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);

        // Append the task item to the task list container
        taskListContainer.appendChild(taskItem);
    });
}

// Add task when the submit button is clicked
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');

    if (taskInput.value.trim() !== '') {
        tasks.push(taskInput.value); // Add the task to the array
        taskInput.value = ''; // Clear the input field
        renderTasks(); // Re-render the task list
    }
});
