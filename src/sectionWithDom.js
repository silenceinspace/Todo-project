import { taskInterface } from "./todosManipulations";
// Export functions
export {
  findClick,
  findChosenProject,
  createEventListener,
  removePreviousTasksFromDOM,
  highlightProject,
  findClosestDataAttibute,
  displayTasksInThisProject,
  updateTodoDisplay,
  displayNewProject,
  checkTaskStatus,
  applyStrikeThroughEffect,
  preventUncheckingTask,
  getIdOfSpecificTask,
  getSiblingElementText,
  removeProjectBtn,
};
// Export variables
export {
  projectBlock,
  inboxBlock,
  createTaskButton,
  createProjectButton,
  displayForTasks,
  createTaskInsideProject,
};

//////////////////////
// Local functions for this file (not exported)
function createDOMElement(name, className, text) {
  let elem = document.createElement(name);
  elem.classList.add(className);
  elem.textContent = text;
  return elem;
}

function appendElement(parent, child) {
  parent.append(child);
}

function createBlocksToRepresentTasks(project) {
  for (let i = 0; i < project.length; i++) {
    const taskDiv = createDOMElement("div", "task-div", "");
    taskDiv.setAttribute("data-id", project[i].id);
    const removeButton = createDOMElement("button", "remove-task", "X");
    const checkList = createDOMElement("input", "check-box", "");
    checkList.setAttribute("type", "checkbox");
    const titlePara = project[i].todoTitle;
    const projectPara = project[i].todoProject;
    const priorityPara = project[i].todoPriority;
    const dueDatePara = project[i].todoDueDate;

    appendElement(displayForTasks, taskDiv);
    appendElement(taskDiv, removeButton);
    appendElement(taskDiv, checkList);

    setColorOnChecklist(priorityPara, checkList);

    createTextFields(
      titlePara,
      projectPara,
      priorityPara,
      dueDatePara,
      taskDiv
    );
  }
}

function createTextFields(title, project, dueDate, priority, div) {
  const textForTitle = createDOMElement("p", "task-title", `Title: ${title}`);
  const textForProject = createDOMElement(
    "p",
    "task-project",
    `Project: ${project}`
  );
  const textForDueDate = createDOMElement(
    "p",
    "task-dueDate",
    `Due by: ${dueDate}`
  );
  const textForPriority = createDOMElement(
    "p",
    "task-priority",
    `Priority: ${priority}`
  );

  appendElement(div, textForTitle);
  appendElement(div, textForProject);
  appendElement(div, textForDueDate);
  appendElement(div, textForPriority);
}

function setColorOnChecklist(priorityLevel, element) {
  if (priorityLevel === "1") {
    element.style.border = "3px solid red";
    element.style.backgroundColor = "rgb(214, 111, 111)";
  } else if (priorityLevel === "2") {
    element.style.border = "3px solid yellow";
    element.style.backgroundColor = "rgb(173, 173, 79)";
  } else if (priorityLevel === "3") {
    element.style.border = "3px solid blue";
    element.style.backgroundColor = "rgb(117, 117, 199)";
  }
}

function selectAllParagraphs(e) {
  const parargraphs = e.target.parentNode.querySelectorAll("p");
  return parargraphs;
}

function generateListOfTasks(project) {
  // Clear the todo block not to duplicate appended elements
  removePreviousTasksFromDOM();

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

function grabTitleOfActiveProject(e) {
  const title = e.target.textContent;
  return title;
}

///////////////////////
// Exported functions
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

function removePreviousTasksFromDOM() {
  displayForTasks.replaceChildren();
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

function displayTasksInThisProject(e) {
  // Click occurs on the inside of a button
  const btn = findClick(e, "button");
  if (!btn) return;

  const title = grabTitleOfActiveProject(e);
  highlightProject(title);
  generateListOfTasks(title);
}

function updateTodoDisplay() {
  const projectTitle = findChosenProject();
  generateListOfTasks(projectTitle);
}

function displayNewProject(value) {
  const div = createDOMElement("div", "project-title-div", "");
  const btn = createDOMElement("button", "custom-project-btn", value);
  btn.classList.add("project");
  const span = createDOMElement("span", "remove-project-btn", "X");
  appendElement(div, btn);
  appendElement(div, span);
  appendElement(projectBlock, div);
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

////////////////////////////
// Main layout
const content = document.querySelector("#content");
const inboxBlock = createDOMElement("div", "inbox-div", "");
const projectBlock = createDOMElement("div", "project-div", "");
const todoBlock = createDOMElement("div", "todo-div", "");
appendElement(content, inboxBlock);
appendElement(content, projectBlock);
appendElement(content, todoBlock);

// Default block
const inbox = createDOMElement("button", "button-inbox", "inbox");
inbox.disabled = true;
inbox.classList.add("project");
const today = createDOMElement("button", "button-today", "today");
today.classList.add("project");
const upcoming = createDOMElement("button", "button-upcoming", "upcoming");
upcoming.classList.add("project");
appendElement(inboxBlock, inbox);
appendElement(inboxBlock, today);
appendElement(inboxBlock, upcoming);

// For now to allow task/project creation
const createTaskButton = createDOMElement(
  "button",
  "create-tasks",
  "Create task"
);
const createProjectButton = createDOMElement(
  "button",
  "create-projects",
  "Create project"
);
const displayForTasks = createDOMElement("div", "display-tasks", "");
appendElement(todoBlock, createTaskButton);
appendElement(todoBlock, createProjectButton);
appendElement(todoBlock, displayForTasks);

// Create tasks locally in a project
const createTaskInsideProject = createDOMElement(
  "button",
  "create-task-directly",
  "+"
);
appendElement(todoBlock, createTaskInsideProject);
