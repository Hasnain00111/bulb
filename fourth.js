// Get elements from the DOM
const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Add delete button to the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
        
        li.appendChild(deleteButton);
        
        // Mark task as completed on click
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        
        todoList.appendChild(li);
        todoInput.value = ""; // Clear the input field
    }
}

// Event listener for the 'Add Task' button
addButton.addEventListener('click', addTask);

// Optional: Allow pressing Enter to add task
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
