export { Todo, taskInterface };
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
  // todos array will modify mainStorage array
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
      if (task.todoProject.toLowerCase() === project.toLowerCase()) {
        array.push(task);
      }
    });
    return array;
  },

  findDueToday() {
    const array = [];
    const todayDate = format(new Date(), "MM/dd/yyyy");

    this.todos.forEach((task) => {
      const formatttedDate = format(task.todoDueDate, "MM/dd/yyyy");
      if (formatttedDate === todayDate) {
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
      const currentTodoDate = task.todoDueDate;
      dates.push(nextSevenDays, todayDate, currentTodoDate);

      const result = dates.sort(compareAsc);
      console.log(result);
      if (
        format(result[1], "MM/dd/yyyy") ===
        format(currentTodoDate, "MM/dd/yyyy")
      ) {
        array.push(task);
      }
    });
    return array;
  },

  // update(task, property, task) {
  //   if (property.toLowerCase() === "title") {
  //     console.log(`Old title: ${task.todoTitle}`);
  //     task.todoTitle = task;
  //     console.log(`Updated title: ${task}`);
  //   } else if (property.toLowerCase() === "priority") {
  //     console.log(`Old title: ${task.todoPriority}`);
  //     task.todoPriority = task;
  //     console.log(`Updated priority: ${task}`);
  //   } else if (property.toLowerCase() === "project") {
  //     console.log(`Old title: ${task.todoProject}`);
  //     task.todoProject = task;
  //     console.log(`Updated property: ${task}`);
  //   }
  //   console.log(`Full details: "${task.title}" title`);
  // },
};