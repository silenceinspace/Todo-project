export { createElement, appendElement, prependElement };

function createElement(name, className, text) {
  let elem = document.createElement(name);
  elem.classList.add(className);
  elem.textContent = text;

  return elem;
}

function appendElement(parent, child) {
  parent.append(child);
}

function prependElement(parent, child) {
  parent.prepend(child);
}

/*
Show all tasks for a particular project
Event delegation on projectDiv

let currentProject;
projectDiv.addEventListener("click", (e) => {
  currentProject = e.target.className;
  console.log(currentProject);
*/
