import * as logic from './logic.js';
import * as bored from './bored.mjs';

const btnSidebar = document.getElementById('btnSidebar');
const btnAddProject = document.getElementById('btnAddProject');
const btnToggleProjects = document.getElementById('btnToggleProject');
// const sidebar = document.getElementById('sidebar');
// const projectSection = document.getElementById('projectSection');
const projectList = document.getElementById('projectList');
// const search = document.getElementById("search");
const test = document.getElementById('test');

test.addEventListener('mousedown', (e) => {
//   bored.random("", "", "");
  bored.getTask;
});

window.addEventListener('load', () => {
    // Load todos from localstorage if they exist.
});

// MOUSE EVENTS=========================================================================
btnSidebar.addEventListener('click', () => {
    logic.toggleElement('sidebar');
});

btnAddProject.addEventListener('click', () => {
    if (projectList.childElementCount < 5) {
        logic.addProject(projectList);
    } else {
        alert('You may not have more than 5 projects!');
    }
});

// TOGGLE PROJECTS LIST EVENT
btnToggleProjects.addEventListener('click', (e) => {
    logic.toggleElement('projectList');
    logic.changeIcon(e, 'fa-solid fa-chevron-down', 'fa-solid fa-chevron-up');
});

// PROJECT LIST CLICK EVENTS
projectList.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.parentElement.parentElement.remove();
    }

    if (e.target.classList.contains('fa-pen-to-square')) {
        logic.editMode(e.target.parentElement.parentElement);
        // let project = e.target.parentElement.parentElement;

    // if(project.querySelector("p") !== null) {
    //     let input = document.createElement('input');
    //     input.setAttribute('placeholder', project.querySelector('p').innerHTML);
    //     input.addEventListener('keydown', (e) => {
    //         if (e.key === 'enter') {
    //             editMode(field);
    //         }
    //     });
    //     swapElement(project.querySelector('p'), input);
    // } else {
    //     let name = document.createElement('p');
    //     if(project.querySelector('input').value !== '') {
    //         name.innerHTML = project.querySelector('input').value;
    //     } else {
    //         name.innerHTML = project.querySelector('input').getAttribute('placeholder');
    //     }
    //     swapElement(project.querySelector('input'), name);
    // }
    }
});

// DELETE PROJECT HOVER EVENTS
projectList.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.style.opacity = '1';
        e.target.style.color = 'red';
        logic.changeIcon(
            e,
            'fa-regular fa-trash-can',
            'fa-regular fa-trash-can fa-shake',
        );
    }
});
projectList.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.style.opacity = '.2';
        e.target.style.color = 'black';
        logic.changeIcon(
            e,
            'fa-regular fa-trash-can',
            'fa-regular fa-trash-can fa-shake',
        );
    }
});

// EDIT PROJECT HOVER EVENTS
projectList.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        e.target.style.opacity = '.2';
        logic.changeIcon(
            e,
            'fa-regular fa-pen-to-square',
            'fa-regular fa-pen-to-square fa-fade',
        );
    }
});
projectList.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        e.target.style.opacity = '1';
        logic.changeIcon(
            e,
            'fa-regular fa-pen-to-square',
            'fa-regular fa-pen-to-square fa-fade',
        );
    }
});

// KEYBOARD EVENTS==================================================================================
window.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName !== 'INPUT') {
        if (e.key === 't') {
            logic.toggleElement('sidebar');
        }
    }
});
