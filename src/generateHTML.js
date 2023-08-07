import { setDisplayNone, setDisabledAttribute } from "./sectionWithDom";
import {
  createObjectFromDateInput,
  getMonthDayYearFormat,
} from "./todosManipulations";

export {
  // Export variables
  content,
  inboxBlock,
  projectBlock,
  displayForTasks,
  createTodoForm, // for index js
  createTaskInsideProject,
  createTaskButton,
  createProjectButton,
  newProjectInput,
  backdropElement,
  okButton,
  xButton,
  // Export functions
  appendElement,
  createBlocksToRepresentTasks,
  createSelectOption,
  createBlocksInExpandedState, // for index js
  displayNewProject, // for index js
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
// Add minor changes to initial DOM ELEMENTS //
////////////////////////////
setDisabledAttribute(inbox);
addClass(inbox, "project");
addClass(today, "project");
addClass(upcoming, "project");
addAttribute(xButton, "type", "button");
addAttribute(okButton, "type", "button");
addAttribute(closePopupMenuButton, "type", "button");
addAttribute(closePopupMenuButton, "tabindex", 7);
addAttribute(addTodoButton, "type", "button");
addAttribute(addTodoButton, "tabindex", 6);
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
      addAttribute(input, "tabindex", i + 1);
    } else if (i === 1) {
      label = createLabel("for-description", "Description:");
      input = createInputElem(
        "text",
        "todo-description",
        "for-description",
        "Buy eggs, meat, vegetables..."
      );
      addAttribute(input, "tabindex", i + 1);
    } else if (i === 2) {
      label = createLabel("for-due-date", "Due date:");
      input = createInputElem(
        "date",
        "todo-due-date",
        "for-due-date",
        "01/01/2020"
      );
      addAttribute(input, "tabindex", i + 1);
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
      addAttribute(input, "tabindex", i + 1);
    } else if (i === 4) {
      label = createLabel("for-project", "Project:");
      input = createSelectBox("for-project", "projects");
      addAttribute(input, "tabindex", i + 1);
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
    const expandButton = createDOMElement("button", "expand-task", "...");
    const checkList = createDOMElement("input", "check-box", "");
    const titlePara = project[i].todoTitle;
    // Use date-fns library to convert a value from a date input to words
    let dueDatePara = createObjectFromDateInput(project[i].todoDueDate);
    dueDatePara = getMonthDayYearFormat(dueDatePara, "literal");
    const priorityPara = project[i].todoPriority;
    appendElement(displayForTasks, taskDiv);
    appendElement(taskDiv, removeButton);
    appendElement(taskDiv, expandButton);
    appendElement(taskDiv, checkList);
    // Add a data attribute to navigate to a needed todo object easier
    addAttribute(taskDiv, "data-id", project[i].id);
    addAttribute(checkList, "type", "checkbox");

    setColorOnChecklist(priorityPara, checkList);

    createDefaultTextFields(taskDiv, titlePara, dueDatePara);
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

function createDefaultTextFields(div, title, dueDate) {
  const textForTitle = createDOMElement("p", "task-title", title);
  const textForDueDate = createDOMElement("p", "task-due-date", dueDate);

  appendElement(div, textForTitle);
  appendElement(div, textForDueDate);
}

function createBlocksInExpandedState(storageArray, button, id, task) {
  for (let i = 0; i < storageArray.length; i++) {
    if (storageArray[i].id === id) {
      const expandedBlock = storageArray[i];
      const descriptionPara = expandedBlock.todoDescription;
      const priorityPara = expandedBlock.todoPriority;
      const projectPara = expandedBlock.titleOfProject;
      // Catch title and due date paragraphs to add a pseudo element to them
      const titlePara = task.querySelector(".task-title");
      const dueDatePara = task.querySelector(".task-due-date");
      const editTask = createDOMElement("button", "edit-task", "Edit title");

      createExpandedTextFields(
        task,
        descriptionPara,
        priorityPara,
        projectPara,
        editTask
      );

      // Insert pseudo element "::before" to imitate a more detailed view of the task's properties
      addClass(dueDatePara, "add-more-due-date-info");
      addClass(titlePara, "add-more-title-info");
      addClass(button, "expanded");
    }
  }
}

// expand a todo
function createExpandedTextFields(
  div,
  description,
  priority,
  project,
  editButton
) {
  const textForDescription = createDOMElement(
    "p",
    "task-description",
    `Description: ${description}`
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
  appendElement(div, textForDescription);
  appendElement(div, textForPriority);
  appendElement(div, textForProject);
  appendElement(div, editButton);
}

function displayNewProject(value) {
  const div = createDOMElement("div", "project-title-div", "");
  const btn = createDOMElement("button", "custom-project-btn", value);
  addClass(btn, "project");
  const span = createDOMElement("span", "remove-project-btn", "X");
  appendElement(div, btn);
  appendElement(div, span);
  appendElement(projectBlock, div);
}

// Functions to create common pieces
function createDOMElement(elementName, className, text) {
  const elem = document.createElement(elementName);
  addClass(elem, className);
  elem.textContent = text;
  return elem;
}

function appendElement(parent, child) {
  parent.append(child);
}

function createLabel(forAttibuteValue, labelText) {
  const label = document.createElement("label");
  addAttribute(label, "for", forAttibuteValue);
  label.textContent = labelText;
  return label;
}

function createInputElem(inputType, nameAttribute, inputId, hintText) {
  const input = document.createElement("input");
  addAttribute(input, "type", inputType);
  addAttribute(input, "name", nameAttribute);
  addAttribute(input, "id", inputId);
  addAttribute(input, "placeholder", hintText);
  return input;
}

function createSelectBox(selectId, selectName) {
  const select = document.createElement("select");
  addAttribute(select, "id", selectId);
  addAttribute(select, "name", selectName);
  return select;
}

function createSelectOption(optionValue, optionText) {
  const option = document.createElement("option");
  addAttribute(option, "value", optionValue);
  option.textContent = optionText;
  return option;
}

function addAttribute(element, attributeName, attributeValue) {
  element.setAttribute(attributeName, attributeValue);
}

function addClass(element, className) {
  element.classList.add(className);
}
