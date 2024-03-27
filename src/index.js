/* eslint-disable require-jsdoc */
import _ from 'lodash';
import './style.css';

const sidebar = document.querySelector('.sidebar');
const header = document.querySelector('.header');
const newProjectButton = document.querySelector('.newProjectButton');
newProjectButton.addEventListener('click', function() {
  document.body.appendChild(darkenBackground());
  document.body.appendChild(createNewProject(createNewPrompt()));
});

const projectTaskList = [];

function darkenBackground() {
  const element = document.createElement('div');
  element.classList.add('darkenBackground');
  console.log(element, 'test');
  return element;
}
function createNewPrompt() {
  const inputField = document.createElement('div');
  inputField.classList.add('inputField');
  return inputField;
}
function revertScreenChanges() {
  if (document.getElementsByClassName('darkenBackground').length > 0) {
    document.getElementsByClassName('darkenBackground')[0].remove();
  }
  if (document.getElementsByClassName('inputField').length > 0) {
    document.getElementsByClassName('inputField')[0].remove();
  }
}
function createInputButton(buttonName, buttonTextContent) {
  const placeholder = buttonName;
  buttonName = document.createElement('button');
  buttonName.classList.add(placeholder, 'inputButton');
  buttonName.textContent = buttonTextContent;
  return buttonName;
}

function createNewProject(prompt) {
  const header = document.createElement('h1');
  header.classList.add('createNewProjectHeader');
  header.textContent = 'Create New Project';
  const createNewProjectForm = document.createElement('createNewProjectForm');

  const submitProjectButton = createInputButton(
      'submitProjectButton',
      'Submit',
  );
  const cancelProjectButton = createInputButton(
      'cancelProjectButton',
      'Cancel',
  );
  cancelProjectButton.addEventListener('click', function() {
    revertScreenChanges();
  });

  const submitProjectNameInput = document.createElement('input');
  submitProjectNameInput.name = 'submitProjectNameInput';
  submitProjectNameInput.setAttribute('id', 'submitProjectNameInput');
  const submitProjectNameLabel = document.createElement('label');
  submitProjectNameLabel.setAttribute('for', 'submitProjectNameInput');
  submitProjectNameLabel.textContent = 'Name: ';

  const createNewProjectFormButtons = document.createElement('div');
  createNewProjectFormButtons.classList.add('createNewProjectFormButtons');
  createNewProjectFormButtons.appendChild(cancelProjectButton);
  createNewProjectFormButtons.appendChild(submitProjectButton);
  submitProjectNameLabel.appendChild(submitProjectNameInput);
  createNewProjectForm.appendChild(submitProjectNameLabel);
  createNewProjectForm.appendChild(createNewProjectFormButtons);

  submitProjectButton.addEventListener('click', function() {
    projectTaskList.push('test');

    createNewProjectFinished(submitProjectNameInput.value);
  });

  prompt.appendChild(header);
  prompt.appendChild(createNewProjectForm);
  return prompt;
}

function createNewProjectFinished(projectName) {
  revertScreenChanges();
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('projectContainer');

  const project = document.createElement('div');
  project.classList.add('project');
  project.textContent = projectName;

  project.addEventListener('click', function() {
    createProjectContent(projectName);
  });
  const createNewTaskButton = document.createElement('button');
  createNewTaskButton.classList.add('createNewTaskButton');
  createNewTaskButton.textContent = '+';
  createNewTaskButton.addEventListener('click', function() {
    document.body.appendChild(darkenBackground());
    document.body.appendChild(createNewTask(createNewPrompt()));
  });

  projectContainer.appendChild(project);
  projectContainer.appendChild(createNewTaskButton);
  sidebar.appendChild(projectContainer);
  return project;
}

function createProjectContent(projectName) {
  header.textContent = projectName;
}

function createNewTask(prompt) {
  const createNewTaskForm = document.createElement('form');

  const createNewTaskHeader = document.createElement('h1');
  createNewTaskHeader.classList.add('createNewTaskHeader');
  createNewTaskHeader.textContent = 'Create New Task';

  const createNewTaskNameInput = document.createElement('input');
  createNewTaskNameInput.setAttribute('id', 'createNewTaskNameInput');
  createNewTaskNameInput.setAttribute('name', 'createNewTaskNameInput');
  const createNewTaskNameInputLabel = document.createElement('label');
  createNewTaskNameInputLabel.setAttribute('for', 'createNewTaskNameInput');
  createNewTaskNameInputLabel.textContent = 'Name: ';

  const createNewTaskCancelButton = createInputButton(
      'createNewTaskCancelButton',
      'Cancel',
  );
  createNewTaskCancelButton.setAttribute('type', 'button');
  const createNewTaskSubmitButton = createInputButton(
      'createNewTaskSubmitButton',
      'Submit',
  );
  createNewTaskSubmitButton.setAttribute('type', 'button');
  const createNewTaskButtons = document.createElement('div');
  createNewTaskButtons.appendChild(createNewTaskCancelButton);
  createNewTaskButtons.appendChild(createNewTaskSubmitButton);

  createNewTaskNameInputLabel.appendChild(createNewTaskNameInput);
  createNewTaskForm.appendChild(createNewTaskNameInputLabel);
  createNewTaskForm.appendChild(createNewTaskButtons);
  prompt.appendChild(createNewTaskHeader);
  prompt.appendChild(createNewTaskForm);
  createNewTaskCancelButton.addEventListener('click', function() {
    revertScreenChanges();
  });
  createNewTaskSubmitButton.addEventListener('click', function() {
    console.log(createNewTaskNameInput.value);
  });
  return prompt;
}

function createNewTaskFinished(taskName) {}

function createTaskList(projectName) {
  this.project = projectName;
  this.tasks = [];
  return {project, tasks};
}
console.log(createTaskList('test'));
