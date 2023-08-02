import { taskInterface } from "./todosManipulations";
import { projectInterface } from "./projectManagement";
import {
  // Import variables
  content,
  inboxBlock,
  projectBlock,
  displayForTasks,
  createTaskInsideProject,
  createTaskButton,
  createProjectButton,
  newProjectInput,
  backdropElement,
  xButton,
  // Import functions
  appendElement,
  createBlocksToRepresentTasks,
  createSelectOption,
} from "./generateHTML";
// Export functions
export {
  findClick,
  createEventListener,
  highlightProject,
  findClosestDataAttibute,
  updateTodoDisplay,
  checkTaskStatus,
  applyStrikeThroughEffect,
  preventUncheckingTask,
  getIdOfSpecificTask,
  getSiblingElementText,
  removeProjectBtn,
  closePopup,
  toggleNewProjectInputBlock,
  setDisplayNone,
};

////////////////////////////
// Event listeners//
////////////////////////////
createEventListener(projectBlock, "click", displayTasksInThisProject);
createEventListener(inboxBlock, "click", displayTasksInThisProject);
createEventListener(createTaskInsideProject, "click", openPopup);
createEventListener(createTaskButton, "click", openPopup);
createEventListener(createProjectButton, "click", toggleNewProjectInputBlock);
createEventListener(xButton, "click", toggleNewProjectInputBlock);
createEventListener(newProjectInput, "keydown", disableEnterKeyOnInput);

////////////////////////////
// Functions //
////////////////////////////
const projectForm = document.querySelector(".create-project-form");
function toggleNewProjectInputBlock() {
  if (projectForm.style.display === "none") {
    setDisplayBlock(projectForm);
  } else {
    setDisplayNone(projectForm);
  }
  resetProjectFormInput();
}

const projectField = document.querySelector("#for-project");
function generateProjectOptions() {
  removePreviousTasksFromDOM(projectField);

  const options = ["inbox"];
  const projectArray = projectInterface.projects;
  projectArray.forEach((project) => options.push(project.titleOfProject));

  options.forEach((option) => {
    const selectOption = createSelectOption(option, option);
    appendElement(projectField, selectOption);
  });
  console.log(options);
}

function openPopup(e) {
  resetTaskFormInputs();
  generateProjectOptions();

  const createdDirectlyOnProject = findClick(e, ".create-task-directly");
  if (createdDirectlyOnProject) {
    const noCreationOnSpecialCategories = limitTasksOnDateCategories();
    if (noCreationOnSpecialCategories) return;
    const autoProject = findChosenProject();
    getAutoProjectInput(projectField, autoProject);
  } else {
    removeDisabledAttr(projectField);
  }

  setDisplayBlock(backdropElement);
  freezeBackground();
}

// Background cannot be tabbed through when popup menu is open
function preventTabbingOnBackground(e) {
  if (e.key === "Tab") {
    e.preventDefault();
  }
}

function freezeBackground() {
  content.addEventListener("keydown", preventTabbingOnBackground);
}

function unfreezeBackground() {
  content.removeEventListener("keydown", preventTabbingOnBackground);
}

function setDisplayNone(block) {
  block.style.display = "none";
}

function setDisplayBlock(block) {
  block.style.display = "block";
}

function resetTaskFormInputs() {
  const form = document.querySelector("form.create-todo-form");
  form.reset();
}

function resetProjectFormInput() {
  const form = document.querySelector("form.create-project-form");
  form.reset();
}

function disableEnterKeyOnInput(e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
}

function getAutoProjectInput(dropdown, project) {
  const childOptions = dropdown.childNodes;
  for (let i = 0; i < childOptions.length; i++) {
    if (childOptions[i].textContent === project) {
      childOptions[i].setAttribute("selected", "");
      setDisabledAttr(dropdown);
    }
  }
}

function setDisabledAttr(elem) {
  elem.setAttribute("disabled", "");
}

function removeDisabledAttr(elem) {
  elem.removeAttribute("disabled");
}

// Imitate a slow task completion
function selectAllParagraphs(e) {
  const parargraphs = e.target.parentNode.querySelectorAll("p");
  return parargraphs;
}

function generateListOfTasks(project) {
  // Clear the todo block not to duplicate appended elements
  removePreviousTasksFromDOM(displayForTasks);

  let currentCategory;
  if (project === "today") {
    currentCategory = taskInterface.findDueToday();
    createBlocksToRepresentTasks(currentCategory);
    return;
  } else if (project === "upcoming") {
    currentCategory = taskInterface.findDueUpcoming();
    createBlocksToRepresentTasks(currentCategory);
    return;
  }

  const currentProject = taskInterface.findAll(project);
  createBlocksToRepresentTasks(currentProject);
}

function grabProjectTitle(e) {
  const title = e.target.textContent;
  return title;
}

function displayTasksInThisProject(e) {
  // Click occurs on the inside of a button
  const btn = findClick(e, "button");
  if (!btn) return;

  const title = grabProjectTitle(e);
  highlightProject(title);
  generateListOfTasks(title);
}

// The user cannot create tasks directly on the today/upcoming categories
function limitTasksOnDateCategories() {
  const currentCategory = findChosenProject();
  if (currentCategory === "today" || currentCategory === "upcoming") {
    alert("You can't  manipulate with tasks inside the category");
    return true;
  }
}

function findClick(e, value) {
  const elem = e.target.closest(value);
  return elem;
}

function findChosenProject() {
  const title = document.querySelector("button[disabled]").textContent;
  return title;
}

function createEventListener(forElem, type, func) {
  forElem.addEventListener(type, func);
}

function removePreviousTasksFromDOM(elem) {
  elem.replaceChildren();
}

function highlightProject(value = "inbox") {
  const disabledButtons = document.querySelectorAll("button.project");
  disabledButtons.forEach((btn) => {
    btn.disabled = false;
    if (btn.textContent === value) {
      btn.disabled = true;
    }
  });
}

function findClosestDataAttibute(e) {
  const task = e.target.closest("[data-id]");
  return task;
}

function getIdOfSpecificTask(task) {
  const id = task.getAttribute("data-id");
  return id;
}

function updateTodoDisplay() {
  const projectTitle = findChosenProject();
  generateListOfTasks(projectTitle);
}

function checkTaskStatus(e) {
  const task = e.target.checked;
  return task;
}

function applyStrikeThroughEffect(e) {
  const paragraphs = selectAllParagraphs(e);
  paragraphs.forEach((para) => (para.style.textDecoration = "line-through"));
}

function preventUncheckingTask(e) {
  e.target.disabled = true;
}

function getSiblingElementText(element) {
  const title = element.previousElementSibling.textContent;
  return title;
}

function removeProjectBtn(element) {
  element.parentNode.remove();
}

function closePopup() {
  setDisplayNone(backdropElement);
  unfreezeBackground();
  resetTaskFormInputs();
}
