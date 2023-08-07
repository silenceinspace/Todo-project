export {
  Todo,
  taskInterface,
  createObjectFromDateInput,
  getMonthDayYearFormat,
};
// Extending Project class
import { Project } from "./projectManagement";
// Library to work with dates easier
import { compareAsc, format } from "date-fns";
import addDays from "date-fns/addDays";

class Todo extends Project {
  // Creates a task
  constructor(projectTitle, title, description, dueDate, priority) {
    // Base class is Project that has a project property on its constructor
    super(projectTitle);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = self.crypto.randomUUID();
  }

  // Updates a task
  get todoTitle() {
    return this.title;
  }
  set todoTitle(value) {
    this.title = value;
  }

  get todoDescription() {
    return this.description;
  }

  set todoDescription(value) {
    this.description = value;
  }

  get todoDueDate() {
    return this.dueDate;
  }

  set todoDueDate(value) {
    this.dueDate = value;
  }

  get todoPriority() {
    return this.priority;
  }
  set todoPriority(value) {
    this.priority = value;
  }
}

// Interface for todos - what functionalities they have
const taskInterface = {
  // Todos array will modify mainStorage array
  todos: [],
  add(todo) {
    this.todos.push(todo);
    return this.todos;
  },

  remove(todo) {
    this.todos = this.todos.filter((task) => task.id !== todo);
    return this.todos;
  },

  findAll(project) {
    const array = [];
    this.todos.forEach((task) => {
      if (task.titleOfProject.toLowerCase() === project.toLowerCase()) {
        array.push(task);
      }
    });
    return array;
  },

  findDueToday() {
    const array = [];
    const todayDate = getMonthDayYearFormat(new Date());

    this.todos.forEach((task) => {
      const dateObject = createObjectFromDateInput(task.todoDueDate);
      const formattedDateOjbect = getMonthDayYearFormat(dateObject);
      if (todayDate === formattedDateOjbect) {
        array.push(task);
      }
    });
    return array;
  },

  findDueUpcoming() {
    const array = [];
    // Find out if the task's due date lays in between today and next seven days
    this.todos.forEach((task) => {
      const dates = [];
      const todayDate = new Date();
      const nextSevenDays = addDays(todayDate, 7);
      const currentTodoDate = createObjectFromDateInput(task.todoDueDate);
      dates.push(nextSevenDays, todayDate, currentTodoDate);

      const result = dates.sort(compareAsc);
      if (
        getMonthDayYearFormat(result[1]) ===
        getMonthDayYearFormat(currentTodoDate)
      ) {
        array.push(task);
      }
    });
    return array;
  },

  editTitle(todoId, newValue) {
    this.todos.forEach((task) => {
      if (task.id === todoId) {
        task.todoTitle = newValue;
      }
    });
    return this.todos;
  },
};

// Format a date input and grab individual numbers to use the Date() constructor
function createObjectFromDateInput(date) {
  const fromDateInput = date.replaceAll("-", " ").split(" ");
  const year = fromDateInput[0];
  const month = fromDateInput[1] - 1;
  const day = fromDateInput[2];
  const newDateObject = new Date(year, month, day);
  return newDateObject;
}

function getMonthDayYearFormat(date, type = "numeric") {
  let formattedDate;
  if (type === "numeric") {
    formattedDate = format(date, "MM/dd/yyyy");
  } else if (type === "literal") {
    formattedDate = format(date, "(MMMM d, yyyy)");
  }
  return formattedDate;
}
