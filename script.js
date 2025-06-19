document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        } else {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            removeBtn.onclick = function() {
                taskList.removeChild(taskItem);
            };
            taskItem.appendChild(removeBtn);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }
    document.getElementById('task-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
document.getElementById('add-task-btn').addEventListener('click', addTask);

});