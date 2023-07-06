export { createElement, appendElement, prependElement };

// function to create DOM elements
function createElement(element, className, text) {
  let createdElement = document.createElement(element);
  createdElement.classList.add(className);
  createdElement.textContent = text;

  return createdElement;
}

function appendElement(mainElement, attachedElement) {
  mainElement.append(attachedElement);
}

function prependElement(mainElement, attachedElement) {
  mainElement.prepend(attachedElement);
}
