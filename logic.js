export function toggleElement(elementId) {
    if (document.getElementById(elementId).style.display === 'none') {
        document.getElementById(elementId).style.display = 'block';
    } else {
        document.getElementById(elementId).style.display = 'none';
    }
}

export function createProject() {
    const project = document.createElement('li');

    // Create project div
    let div = document.createElement('div');

    // Create color icon
    let icon = document.createElement('i');
    icon.style.color = '#047aed';
    icon.classList = 'fa-solid fa-circle fa-xs';

    // Create project name
    const name = document.createElement('p');
    name.innerHTML = 'Project'; // This needs to be an input field.

    // Append details div
    div.appendChild(icon);
    div.appendChild(name);
    div.style = 'display: flex; flex-direction: row; justify-content: end; align-items: center;';
    project.appendChild(div);

    // Create tools div
    div = document.createElement('div');

    // Create and append edit icon
    icon = document.createElement('i');
    icon.className = 'fa-regular fa-pen-to-square';
    icon.style.opacity = '.2';
    div.appendChild(icon);

    // Create and append delete icon
    icon = document.createElement('i');
    icon.className = 'fa-regular fa-trash-can';
    icon.style.opacity = '.2';
    div.appendChild(icon);

    // Add tools div to project
    project.appendChild(div);

    return project;
}

export function addProject(projectList) {
    const project = createProject();
    projectList.appendChild(project);
}

export function changeIcon(element, icon1, icon2) {
    const temp = element.target;
    if (temp.tagName === 'I') {
        if (temp.className === icon1) {
            temp.className = icon2;
        } else {
            temp.className = icon1;
        }
    }
}

export function swapElement(element1, element2) {
    element1.parentElement.appendChild(element2);
    element1.remove();
}

export function editMode(name) {
    const field = name;

    if (field.querySelector('p') !== null) {
        const input = document.createElement('input');
        input.setAttribute('placeholder', field.querySelector('p').innerHTML);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'enter') {
                editMode(field);
            }
        });
        swapElement(field.querySelector('p'), input);
    } else {
        const p = document.createElement('p');
        if (field.querySelector('input').value !== '') {
            p.innerHTML = field.querySelector('input').value;
        } else {
            p.innerHTML = field.querySelector('input').getAttribute('placeholder');
        }
        swapElement(field.querySelector('input'), p);
    }
}
