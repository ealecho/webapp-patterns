import { TodoList } from "./webapp/classes.js";
import { Command, CommandExecutor, Commands } from "./webapp/command.js";

globalThis.DOM = {};

//easy access withing this file
const DOM = globalThis.DOM;

function renderList() {
    const todos = TodoList.getInstance();
    DOM.todoList.innerHTML = ""
    for (let todo of todos.items) {
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        listItem.innerHTML = `${todo.text}
                <button class="delete-btn">Delete</button>
        `;
        listItem.dataset.text = todo.text;
        DOM.todoList.appendChild(listItem);
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    //Create references we will need later

    DOM.todoList = document.getElementById('todo-list');
    DOM.addBtn = document.getElementById('add-btn');
    DOM.todoInput = document.getElementById('todo-input');

    //Event listeners
    DOM.addBtn.addEventListener('click', () => {
        const cmd = new Command(Commands.ADD);
        CommandExecutor.execute(cmd);
    });

    DOM.todoList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const todo = event.target.parentNode.dataset.text;
            const cmd = new Command(Command.DELETE, [todo]);
            CommandExecutor.execute(cmd);
        }
    });

    //Rendering on DOM content loaded, and when the list changes
    renderList();
    TodoList.getInstance().addObserver(renderList);
});