import { taskInterface } from "./todosManipulations";
import { projectInterface } from "./projectManagement";
// Export functions
export {
  findClick,
  createEventListener,
  highlightProject,
  findClosestDataAttibute,
  updateTodoDisplay,
  displayNewProject,
  checkTaskStatus,
  applyStrikeThroughEffect,
  preventUncheckingTask,
  getIdOfSpecificTask,
  getSiblingElementText,
  removeProjectBtn,
  closePopup,
  toggleNewProjectInputBlock,
};
// Export variables
export { projectBlock, displayForTasks, createTodoForm, okButton };

////////////////////////////
// The only one HTML element //
////////////////////////////
const content = document.querySelector("#content");

////////////////////////////
// Create DOM ELEMENTS //
////////////////////////////
const inboxBlock = createDOMElement("div", "inbox-div", "");
const projectBlock = createDOMElement("div", "project-div", "");
const todoBlock = createDOMElement("div", "todo-div", "");
const inbox = createDOMElement("button", "button-inbox", "inbox");
const today = createDOMElement("button", "button-today", "today");
const upcoming = createDOMElement("button", "button-upcoming", "upcoming");
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
const createTaskInsideProject = createDOMElement(
  "button",
  "create-task-directly",
  "+"
);
const projectHeading = createDOMElement("div", "project-heading", "PROJECTS:");
const backdropElemenent = createDOMElement("div", "backdrop", "");
const createTodoForm = createDOMElement("form", "create-todo-form", "");
const createProjectForm = createDOMElement("form", "create-project-form", "");
const para = createDOMElement("p", "popup-menu", "");
const newProjectInput = createInputElem(
  "text",
  "new-project",
  "for-new-project",
  "Project name..."
);
const okButton = createDOMElement("button", "new-project-button-ok", "OK");
const xButton = createDOMElement("button", "new-project-button-x", "X");

////////////////////////////
// Append DOM ELEMENTS //
////////////////////////////
appendElement(content, inboxBlock);
appendElement(content, projectBlock);
appendElement(content, todoBlock);
appendElement(inboxBlock, inbox);
appendElement(inboxBlock, today);
appendElement(inboxBlock, upcoming);
appendElement(todoBlock, createTaskButton);
appendElement(todoBlock, createProjectButton);
appendElement(todoBlock, displayForTasks);
appendElement(todoBlock, createTaskInsideProject);
appendElement(document.body, backdropElemenent);
appendElement(backdropElemenent, createTodoForm);
appendElement(projectBlock, projectHeading);
appendElement(todoBlock, createProjectForm);
appendElement(createProjectForm, para);
appendElement(para, newProjectInput);
appendElement(para, xButton);
appendElement(para, okButton);

////////////////////////////
// Add minor changes to DOM ELEMENTS //
////////////////////////////
inbox.disabled = true;
inbox.classList.add("project");
today.classList.add("project");
upcoming.classList.add("project");
xButton.setAttribute("type", "button");
okButton.setAttribute("type", "button");
createProjectForm.style.display = "none";
backdropElemenent.style.display = "none";

////////////////////////////
// Event listeners to DOM ELEMENTS //
////////////////////////////
createEventListener(projectBlock, "click", displayTasksInThisProject);
createEventListener(inboxBlock, "click", displayTasksInThisProject);
createEventListener(createTaskInsideProject, "click", openPopup);
createEventListener(createTaskButton, "click", openPopup);
createEventListener(createProjectButton, "click", toggleNewProjectInputBlock);
createEventListener(xButton, "click", toggleNewProjectInputBlock);
createEventListener(newProjectInput, "keydown", disableEnterKeyOnInput);

////////////////////////////
// Non-exported functions //
////////////////////////////
function createDOMElement(name, className, text) {
  let elem = document.createElement(name);
  elem.classList.add(className);
  elem.textContent = text;
  return elem;
}

function appendElement(parent, child) {
  parent.append(child);
}

function createLabel(forAttr, textCont) {
  const label = document.createElement("label");
  label.setAttribute("for", forAttr);
  label.textContent = textCont;
  return label;
}

function createInputElem(inputType, nameAttr, inputId, hintText) {
  const input = document.createElement("input");
  input.setAttribute("type", inputType);
  input.setAttribute("name", nameAttr);
  input.setAttribute("id", inputId);
  input.setAttribute("placeholder", hintText);
  return input;
}

function createSelectBox(selectId, selectName) {
  const select = document.createElement("select");
  select.setAttribute("id", selectId);
  select.setAttribute("name", selectName);
  return select;
}

function createSelectOption(optionValue, optionText) {
  const option = document.createElement("option");
  option.setAttribute("value", optionValue);
  option.textContent = optionText;
  return option;
}

// Popup menu
(function createInputFields() {
  for (let i = 0; i < 5; i++) {
    const para = createDOMElement("p", "popup-menu", "");
    appendElement(createTodoForm, para);

    let label;
    let input;
    if (i === 0) {
      label = createLabel("for-title", "Title:");
      input = createInputElem("text", "todo-title", "for-title", "Groceries");
    } else if (i === 1) {
      label = createLabel("for-description", "Description:");
      input = createInputElem(
        "text",
        "todo-description",
        "for-description",
        "Buy all ingredients"
      );
    } else if (i === 2) {
      label = createLabel("for-due-date", "Due date:");
      // type of input ---> date
      input = createInputElem(
        "date",
        "todo-due-date",
        "for-due-date",
        "01/01/2020"
      );
      input.setAttribute("required", "");
    } else if (i === 3) {
      label = createLabel("for-priority", "Priority:");
      input = createSelectBox("for-priority", "priorities");
      const onePriority = createSelectOption("1", "1");
      const twoPriority = createSelectOption("2", "2");
      const threePriority = createSelectOption("3", "3");
      const noPriority = createSelectOption("-", "-");
      appendElement(input, noPriority);
      appendElement(input, onePriority);
      appendElement(input, twoPriority);
      appendElement(input, threePriority);
    } else if (i === 4) {
      label = createLabel("for-project", "Project:");
      input = createSelectBox("for-project", "projects");
    }

    appendElement(para, label);
    appendElement(para, input);
  }
})();

function toggleNewProjectInputBlock() {
  const projectInput = document.querySelector(".create-project-form");
  if (projectInput.style.display === "none") {
    projectInput.style.display = "block";
  } else {
    projectInput.style.display = "none";
  }
  resetProjectFormInput();
}

function generateProjectOptions() {
  const inputField = document.querySelector("#for-project");
  removePreviousTasksFromDOM(inputField);

  const options = ["inbox"];
  const projectArray = projectInterface.projects;
  projectArray.forEach((project) => options.push(project.titleOfProject));

  options.forEach((option) => {
    const selectOption = createSelectOption(option, option);
    appendElement(inputField, selectOption);
  });
  console.log(options);
}

(function createControlPopupButtons() {
  const div = createDOMElement("div", "control-popup-div", "");
  const createTodoButton = createDOMElement("button", "create-tasks", "Add");
  const closePopupMenuButton = createDOMElement(
    "button",
    "close-popup",
    "Cancel"
  );
  closePopupMenuButton.setAttribute("type", "button");
  createTodoButton.setAttribute("type", "button");

  appendElement(createTodoForm, div);
  appendElement(div, closePopupMenuButton);
  appendElement(div, createTodoButton);
})();

function openPopup(e) {
  resetTaskFormInputs();
  const inputField = document.querySelector("#for-project");
  generateProjectOptions();

  const createdDirectlyOnProject = findClick(e, ".create-task-directly");
  if (createdDirectlyOnProject) {
    const noCreationOnSpecialCategories = limitTasksOnDateCategories();
    if (noCreationOnSpecialCategories) return;
    const autoProject = findChosenProject();
    getAutoProjectInput(inputField, autoProject);
  } else {
    removeDisabledAttr(inputField);
  }

  backdropElemenent.style.display = "block";
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

function getAutoProjectInput(projectField, project) {
  let childOptions = projectField.childNodes;
  for (let i = 0; i < childOptions.length; i++) {
    if (childOptions[i].textContent === project) {
      childOptions[i].setAttribute("selected", "");
      setDisabledAttr(projectField);
    }
  }
}

function setDisabledAttr(elem) {
  elem.setAttribute("disabled", "");
}

function removeDisabledAttr(elem) {
  elem.removeAttribute("disabled");
}

// Visually demonstrate todos
function createBlocksToRepresentTasks(project) {
  for (let i = 0; i < project.length; i++) {
    const taskDiv = createDOMElement("div", "task-div", "");
    const removeButton = createDOMElement("button", "remove-task", "X");
    const checkList = createDOMElement("input", "check-box", "");
    const titlePara = project[i].todoTitle;
    const descriptionPara = project[i].todoDescription;
    const dueDatePara = project[i].todoDueDate;
    const priorityPara = project[i].todoPriority;
    const projectPara = project[i].todoProject;
    appendElement(displayForTasks, taskDiv);
    appendElement(taskDiv, removeButton);
    appendElement(taskDiv, checkList);
    taskDiv.setAttribute("data-id", project[i].id);
    checkList.setAttribute("type", "checkbox");

    setColorOnChecklist(priorityPara, checkList);

    createTextFields(
      titlePara,
      descriptionPara,
      dueDatePara,
      priorityPara,
      projectPara,
      taskDiv
    );
  }
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

function createTextFields(title, description, dueDate, priority, project, div) {
  const textForTitle = createDOMElement("p", "task-title", `Title: ${title}`);
  const textForDescription = createDOMElement(
    "p",
    "task-description",
    `Description: ${description}`
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
  const textForProject = createDOMElement(
    "p",
    "task-project",
    `Project: ${project}`
  );

  appendElement(div, textForTitle);
  appendElement(div, textForDescription);
  appendElement(div, textForProject);
  appendElement(div, textForDueDate);
  appendElement(div, textForPriority);
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

function grabTitleOfActiveProject(e) {
  const title = e.target.textContent;
  return title;
}

function displayTasksInThisProject(e) {
  // Click occurs on the inside of a button
  const btn = findClick(e, "button");
  if (!btn) return;

  const title = grabTitleOfActiveProject(e);
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

////////////////////////////
// Exported functions //
////////////////////////////
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

function closePopup() {
  backdropElemenent.style.display = "none";
  unfreezeBackground();
  resetTaskFormInputs();
}
