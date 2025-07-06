globalThis.DOM = {};

//easy access withing this file
const DOM = globalThis.DOM;

document.addEventListener('DOMContentLoaded', ()=> {
    //Create references we will need later

    DOM.todoList = document.getElementById('todo-list');
    DOM.addBtn = document.getElementById('add-btn');
    DOM.todoInput = document.getElementById('todo-input');

    //Event listeners
    DOM.addBtn.addEventListener('click', () => {
        //TODO
    });
})