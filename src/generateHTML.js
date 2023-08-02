import { setDisplayNone } from "./sectionWithDom";

export {
    // Export variables
  content,
  inboxBlock,
  projectBlock,
  displayForTasks,
  createTodoForm,
  createTaskInsideProject,
  createTaskButton,
  createProjectButton,
  newProjectInput,
  backdropElement,
  okButton,
  xButton,
  // Export functions
  createDOMElement,
  appendElement,
  createBlocksToRepresentTasks,
  createSelectOption,
  displayNewProject,
};

////////////////////////////
// The only one HTML element //
////////////////////////////
const content = document.querySelector("#content");

////////////////////////////
// Create DOM ELEMENTS //
////////////////////////////
const inboxBlock = createDOMElement("div", "inbox-div", "");
const projectBlock = createDOMElement("div", "project-div", "");
const projectHeading = createDOMElement("div", "project-heading", "PROJECTS:");
const today = createDOMElement("button", "button-today", "today");
const todoBlock = createDOMElement("div", "todo-div", "");
const inbox = createDOMElement("button", "button-inbox", "inbox");
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
const backdropElement = createDOMElement("div", "backdrop", "");
const createTodoForm = createDOMElement("form", "create-todo-form", "");
const createProjectForm = createDOMElement("form", "create-project-form", "");
const projectFormParagraph = createDOMElement("p", "popup-menu", "");
const newProjectInput = createInputElem(
  "text",
  "new-project",
  "for-new-project",
  "Project title..."
);
const okButton = createDOMElement("button", "new-project-button-ok", "OK");
const xButton = createDOMElement("button", "new-project-button-x", "X");
const divWithButtonsInPopup = createDOMElement("div", "control-popup-div", "");
const addTodoButton = createDOMElement("button", "create-tasks", "Add");
const closePopupMenuButton = createDOMElement(
  "button",
  "close-popup",
  "Cancel"
);

////////////////////////////
// Append DOM ELEMENTS //
////////////////////////////
appendElement(content, inboxBlock);
appendElement(content, projectBlock);
appendElement(content, todoBlock);
appendElement(projectBlock, projectHeading);
appendElement(inboxBlock, inbox);
appendElement(inboxBlock, today);
appendElement(inboxBlock, upcoming);
appendElement(todoBlock, createTaskButton);
appendElement(todoBlock, createProjectButton);
appendElement(todoBlock, displayForTasks);
appendElement(todoBlock, createTaskInsideProject);
appendElement(document.body, backdropElement);
appendElement(backdropElement, createTodoForm);
appendElement(todoBlock, createProjectForm);
appendElement(createProjectForm, projectFormParagraph);
appendElement(projectFormParagraph, newProjectInput);
appendElement(projectFormParagraph, xButton);
appendElement(projectFormParagraph, okButton);

////////////////////////////
// Add minor changes to DOM ELEMENTS //
////////////////////////////
inbox.disabled = true;
inbox.classList.add("project");
today.classList.add("project");
upcoming.classList.add("project");
xButton.setAttribute("type", "button");
okButton.setAttribute("type", "button");
closePopupMenuButton.setAttribute("type", "button");
addTodoButton.setAttribute("type", "button");
setDisplayNone(createProjectForm);
setDisplayNone(backdropElement);

////////////////////////////
// Popup menu //
////////////////////////////
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
        "Buy eggs, meat, vegetables..."
      );
    } else if (i === 2) {
      label = createLabel("for-due-date", "Due date:");
      input = createInputElem(
        "date",
        "todo-due-date",
        "for-due-date",
        "01/01/2020"
      );
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

  // Place control buttons below input fields in the popup menu
  appendElement(createTodoForm, divWithButtonsInPopup);
  appendElement(divWithButtonsInPopup, closePopupMenuButton);
  appendElement(divWithButtonsInPopup, addTodoButton);
})();

////////////////////////////
// Functions //
////////////////////////////
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

function displayNewProject(value) {
  const div = createDOMElement("div", "project-title-div", "");
  const btn = createDOMElement("button", "custom-project-btn", value);
  btn.classList.add("project");
  const span = createDOMElement("span", "remove-project-btn", "X");
  appendElement(div, btn);
  appendElement(div, span);
  appendElement(projectBlock, div);
}

function createDOMElement(elementName, className, text) {
  const elem = document.createElement(elementName);
  elem.classList.add(className);
  elem.textContent = text;
  return elem;
}

function appendElement(parent, child) {
  parent.append(child);
}

function createLabel(forAttribute, labelText) {
  const label = document.createElement("label");
  label.setAttribute("for", forAttribute);
  label.textContent = labelText;
  return label;
}

function createInputElem(inputType, nameAttribute, inputId, hintText) {
  const input = document.createElement("input");
  input.setAttribute("type", inputType);
  input.setAttribute("name", nameAttribute);
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
