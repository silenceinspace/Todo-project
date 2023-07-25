export { Todo, taskInterface };
import { Project } from "./projectManagement";
// Library to work with dates easier
import { compareAsc, format } from "date-fns";
import addDays from "date-fns/addDays";

class Todo extends Project {
  // Creates a todo
  constructor(projectTitle, title, dueDate, priority) {
    // Base class is Project that has a project property on its constructor
    super(projectTitle);
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = self.crypto.randomUUID();
  }

  // Updates a todo
  get todoProject() {
    return this.projectTitle;
  }
  set todoProject(value) {
    this.projectTitle = value;
  }

  get todoTitle() {
    return this.title;
  }
  set todoTitle(value) {
    this.title = value;
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
  // todos array will modify mainStorage array
  todos: [],
  add(elem) {
    this.todos.push(elem);
    return this.todos;
  },

  remove(value) {
    this.todos = this.todos.filter((task) => task.id !== value);
    return this.todos;
  },

  findAll(proj) {
    const arr = [];
    this.todos.forEach((todo) => {
      if (todo.todoProject.toLowerCase() === proj.toLowerCase()) {
        arr.push(todo);
      }
    });
    return arr;
  },

  findDueToday() {
    const arr = [];
    const todayDate = format(new Date(), "MM/dd/yyyy");

    this.todos.forEach((todo) => {
      const formatttedDate = format(todo.todoDueDate, "MM/dd/yyyy");
      if (formatttedDate === todayDate) {
        arr.push(todo);
      }
    });
    return arr;
  },

  findDueUpcoming() {
    const arr = [];
    // Find out if the task's due date lays in between today and next seven days
    this.todos.forEach((todo) => {
      const dates = [];
      const todayDate = new Date();
      const nextSevenDays = addDays(todayDate, 7);
      const currentTodoDate = todo.todoDueDate;
      dates.push(nextSevenDays, todayDate, currentTodoDate);

      const result = dates.sort(compareAsc);
      console.log(result);
      if (
        format(result[1], "MM/dd/yyyy") ===
        format(currentTodoDate, "MM/dd/yyyy")
      ) {
        arr.push(todo);
      }
    });
    return arr;
  },

  // update(elem, property, value) {
  //   if (property.toLowerCase() === "title") {
  //     console.log(`Old title: ${elem.todoTitle}`);
  //     elem.todoTitle = value;
  //     console.log(`Updated title: ${value}`);
  //   } else if (property.toLowerCase() === "priority") {
  //     console.log(`Old title: ${elem.todoPriority}`);
  //     elem.todoPriority = value;
  //     console.log(`Updated priority: ${value}`);
  //   } else if (property.toLowerCase() === "project") {
  //     console.log(`Old title: ${elem.todoProject}`);
  //     elem.todoProject = value;
  //     console.log(`Updated property: ${value}`);
  //   }
  //   console.log(`Full details: "${elem.title}" title`);
  // },
};
