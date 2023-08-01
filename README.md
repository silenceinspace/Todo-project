# Todo-project

I am relearning again how important writing a good readme is. It is not a ~~waste of time~~ nor ~~useless~~, it actually reminds me that programming is not _just writing code_ but, more importantly, **thinking**.

## Current project: TODO

_What can a todo app do?_

A todo is an app that allows a user to write down tasks that they need to complete. Tasks can be grouped by projects or time states. As a result, the todo aids in time-management and making better choices in life.

### Tasks

A few parameteres can be set on a task:

1. Title - a few words that help to get a better idea of the task;
2. Description - additional text that can be used to elaborate on the task;
3. Due date - a specific point in time by which the task must be done, aka _deadline_;
4. Priority - property that reflects on how urgent/important the task is;

The todo app has two different types of state to display tasks - project and temporary views.

> The project view displays all tasks that have been either created on that project or associated with it.

> The temporary view is directly tied with the task's properties. While using that view, the app "sorts" all tasks based on a due date in this case.

### Projects

A project is a place that refers to all tasks that have the same property on themselves.

It is possible to create as many custom projects on the app as possible, but there is always the default one. If a user does not select any project during the task's creation, then it is automatically set to the default project.

_How can the todo accomplish this behavior?_

**Task creation:**

1. There should be two ways how a user can enter a window to input details of their task.
   One is a global popup menu where the user is expected to explicitly mention what project they want to tie their task with.
   And the other can be accessed directly on the project. In that case, it is assumed that a created task belongs to the project.

> It is required to specify a task title. It is not possible to create a task without a title.

> Any task should be a part of a project. While creating a new task, a user can create it on a custom project. In case no project has been selected/initialized yet, the task is created on the default project.

2. Once the previous step is done, all tasks are stored in one place.

**Manipulations with tasks:** (_CRUD principle_)

1. Creation - task is created based on a common template;
2. Reading - task can be retrived and grouped with other similar tasks;
3. Update - task can be edited, i.e. a changed title;
4. Deletion - task can be removed from an app's storage due to two reasons: completing or early removal;

**Project creation:**

1. It is possible to create a custom project and associate it with tasks. To achieve it only a project title is expected.

> By default, there is only one project. So if a custom one is not created, there is only one "place" to store tasks.

**Natural flow of the app:**

- A multiple tasks are created and set on a project.
- A user can complete/delete/edit tasks.
- To work with a specific task, some form of identification is executed thanks to the task's properties and id.
- Tasks can be divided into different projects so that it is easier to organize them. And when the user wants to see only tasks of the current project, the rest is hidden as though nothing else exists.

### Development

Questions to ask myself at the beginning of a project:

1. What parts make up my project? And how can I encapsulate them so that they don't interfere with each other?
2. How do these components communicate with each other?
3. How can I make these parts reusable - create as I need them?

**Components of a todo**:

- Control panel

  - projects
    - default one;
    - custom ones;
  - types of temporary view
    - today's tasks;
    - upcoming tasks;

- Storage for tasks and potentially projects

- Block listing todos
  - checklists (for completing tasks);
  - task creation;
  - tasks details
    - title;
    - description;
    - due date;
    - priority;
    - project;

**Identifying first essential steps**

1. Plan out the structure of my code

- how many modules will I have?
- what will each module be responsible for?
- how will modules communicate with each other?

2. Task creation

- should I use classes or factories?
- what properties will tasks have?
- where will I store tasks?

3. Operations with tasks

- how can I retrieve a specific task from the storage?
- how will I know that a task belongs to a particular project?
- what info can I edit on tasks? and how will they be updated then?
- how I should "mark" tasks to remove the needed ones easier?

4. Project management

- how can I create a custom project?
- how will all tasks get access (can be tied with) to new projects?
- should I have a project "manager" that will watch and be able to modify all projects?
