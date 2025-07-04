globalThis.DOM = {};

const DOM = globalThis.DOM;

document.addEventListener('DOMContentLoaded', () => {

    // Create reference to the DOM object we shall need later
    DOM.todoList = document.getElementById('todo-list');
    DOM.addBtn = document.getElementById('add-btn');
    DOM.todoInput = document.getElementById('todo-input');

    // Event listeners
    DOM.addBtn.addEventListener('click', () => {
        // TODO
    });

    DOM.todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            // TODO
        }
    });

});