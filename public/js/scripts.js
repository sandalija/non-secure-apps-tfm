document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const todoTitle = todoInput.value.trim();

        if (todoTitle) {
            addTodoToList(todoTitle);
            todoInput.value = '';
        }
    });

    function addTodoToList(title) {
        const listItem = document.createElement('li');
        listItem.textContent = title;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    }
});