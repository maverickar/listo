import checkmarkLogo from './assets/checkmark.svg';
import plusSvg from './assets/plus.svg';
import plusWhiteSvg from './assets/plus-white.svg';
import addNewTodo from './toDoCreator';

export default function init() {
    appendAssets();
    bindEvents();
}

function getDom() {
    return {
        headerLogo: document.querySelector('.header-logo'),
        addProjectBtn: document.querySelector('#add-project-btn'),
        addTodoBtn: document.querySelector('#add-todo-btn'),
        dialog: document.querySelector('.modal'),
        dialogSubmitBtn: document.querySelector('#dialog-submit-btn'),
        dialogCloseBtn: document.querySelector('#dialog-close-btn')
    }
}

function bindEvents() {
    getDom().addTodoBtn.addEventListener('click', openNewTodoModal);
    getDom().addProjectBtn.addEventListener('click', openNewProjectModal);
    getDom().dialogSubmitBtn.addEventListener('click', addNewTodo); 
    getDom().dialogCloseBtn.addEventListener('click', () => getDom().dialog.close())
}

export function getFormData() {
    return {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        dueDate: document.querySelector('#dueDate').value,
        project: document.querySelector('#project'),
        priority: document.querySelector('input[name="priority"]:checked').value
    }
}

function openNewTodoModal() {
    getDom().dialog.showModal();
}
function openNewProjectModal() {
    console.log("opening")
}

function appendAssets() {
    appendLogo();
    appendPlusSvg();
    appendPlusWhiteSvg();
}

function appendLogo() {
    const logo = new Image();
    logo.src = checkmarkLogo;
    getDom().headerLogo.appendChild(logo);
}

function appendPlusSvg() {
    const plusSign = new Image();
    plusSign.src = plusSvg;
    getDom().addProjectBtn.prepend(plusSign);
}

function appendPlusWhiteSvg() {
    const plusWhiteSign = new Image();
    plusWhiteSign.src = plusWhiteSvg;
    getDom().addTodoBtn.prepend(plusWhiteSign);
}

