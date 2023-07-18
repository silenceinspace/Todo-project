// Export functions
export {
  displayNewProject,
  findClick,
  findChosenProject,
  createEventListener,
  grabTitleOfActiveProject,
  removePreviousTasksFromDOM,
  createBlocksToRepresentTasks,
  createTextFields,
  setColorOnChecklist,
  highlightProject,
  findClosestDataAttibute,
  getIdOfSpecificTask,
};
// Export variables
export {
  projectBlock,
  inbox,
  createTaskButton,
  createProjectButton,
  displayForTasks,
  createTaskInsideProject,
};

function createElement(name, className, text) {
  let elem = document.createElement(name);
  elem.classList.add(className);
  elem.textContent = text;

  return elem;
}

function appendElement(parent, child) {
  parent.append(child);
}

function findClick(e, value) {
  const elem = e.target.closest(value);
  return elem;
}
function findChosenProject() {
  const title = document.querySelector("button[disabled]").textContent;
  return title;
}

function grabTitleOfActiveProject(e) {
  const title = e.target.textContent;
  return title;
}

function createEventListener(forElem, type, func) {
  forElem.addEventListener(type, func);
}

function removePreviousTasksFromDOM() {
  displayForTasks.replaceChildren();
}

function createBlocksToRepresentTasks(project) {
  for (let i = 0; i < project.length; i++) {
    const taskDiv = createElement("div", "task-div", "");
    taskDiv.setAttribute("data-id", project[i].id);
    const removeButton = createElement("button", "remove-task", "X");
    const checkList = createElement("input", "check-box", "");
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
  const textForTitle = createElement("p", "task-title", `Title: ${title}`);
  const textForProject = createElement(
    "p",
    "task-project",
    `Project: ${project}`
  );
  const textForDueDate = createElement(
    "p",
    "task-dueDate",
    `Due by: ${dueDate}`
  );
  const textForPriority = createElement(
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

function displayNewProject(value) {
  const div = createElement("div", "project-title-div", "");
  const btn = createElement("button", "custom-project-btn", value);
  btn.classList.add("project");
  const span = createElement("span", "remove-project-btn", "X");
  appendElement(div, btn);
  appendElement(div, span);
  appendElement(projectBlock, div);
}

// Main layout
const content = document.querySelector("#content");
const inboxBlock = createElement("div", "inbox-div", "");
const projectBlock = createElement("div", "project-div", "");
const todoBlock = createElement("div", "todo-div", "");
appendElement(content, inboxBlock);
appendElement(content, projectBlock);
appendElement(content, todoBlock);

// Default block
const inbox = createElement("button", "button-inbox", "inbox");
inbox.disabled = true;
inbox.classList.add("project");
const today = createElement("button", "button-today", "today");
const upcoming = createElement("button", "button-upcoming", "upcoming");
appendElement(inboxBlock, inbox);
appendElement(inboxBlock, today);
appendElement(inboxBlock, upcoming);

// For now to allow task/project creation
const createTaskButton = createElement("button", "create-tasks", "Create task");
const createProjectButton = createElement(
  "button",
  "create-projects",
  "Create project"
);
const displayForTasks = createElement("div", "display-tasks", "");
appendElement(todoBlock, createTaskButton);
appendElement(todoBlock, createProjectButton);
appendElement(todoBlock, displayForTasks);

// Create tasks locally in a project
const createTaskInsideProject = createElement(
  "button",
  "create-task-directly",
  "+"
);
appendElement(todoBlock, createTaskInsideProject);
