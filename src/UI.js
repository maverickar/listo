import checkmarkLogo from './assets/checkmark.svg';
import plusSvg from './assets/plus.svg';
import plusWhiteSvg from './assets/plus-white.svg';

export default function init() {
    appendLogo();
    appendPlusSvg();
    appendPlusWhiteSvg();
    bindEvents();
}

function getDom() {
    return {
        headerLogo: document.querySelector('.header-logo'),
        addProjectBtn: document.querySelector('#add-project-btn'),
        addTodoBtn: document.querySelector('#add-todo-btn'),
        dialog: document.querySelector('.modal')
    }
}

function bindEvents() {
    getDom().addTodoBtn.addEventListener('click', openNewTodoModal);
    getDom().addProjectBtn.addEventListener('click', openNewProjectModal);
}

function openNewTodoModal() {
    getDom().dialog.showModal();
}
function openNewProjectModal() {
    console.log("opening")
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

