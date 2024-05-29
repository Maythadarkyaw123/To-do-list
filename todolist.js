// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDeadline = document.getElementById('task-deadline');
    const taskPriority = document.getElementById('task-priority');
    const taskLabel = document.getElementById('task-label');
    const tasksContainer = document.getElementById('tasks');

    taskForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();

        const taskText = taskInput.value;
        const deadline = taskDeadline.value;
        const priority = taskPriority.value;
        const label = taskLabel.value;

        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `
            <div class="task-details">
                <strong>${taskText}</strong> 
                <span class="task-priority">[${priority}]</span>
                <span class="task-deadline">${deadline}</span>
                ${label ? `<span class="task-label">${label}</span>` : ''}
            </div>
            <button class="delete-task">X</button>
        `;

        const deleteBtn = task.querySelector('.delete-task');
        deleteBtn.addEventListener('click', () => task.remove());

        tasksContainer.appendChild(task);

        taskForm.reset();
    }
});
