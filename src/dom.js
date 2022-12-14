import trashIcon from "./asset/trash-can-outline.svg";
import pencilIcon from "./asset/pencil.svg";
import trashIconW from "./asset/trashcanwhite.svg";
import { projects, project as projectClass } from "./data";
import { editTask, forms, showTodo } from "./form";
import storage from "./projectinit";

class uiComponents {
  static createtask(name, date, index) {
    let todo = document.createElement("div");
    todo.classList.add(index);
    todo.classList.add("todo");
    let leftDiv = document.createElement("div");
    todo.appendChild(leftDiv);
    let completeButton = document.createElement("button");
    completeButton.textContent = "✓";
    completeButton.addEventListener("click", () => removeTask(index));
    let taskName = document.createElement("span");
    taskName.textContent = `${name}`;
    leftDiv.appendChild(completeButton);
    leftDiv.appendChild(taskName);
    let due = document.createElement("span");
    due.textContent = `${date}`;
    due.classList.add("date");
    todo.appendChild(due);
    let edit = document.createElement("img");
    edit.src = pencilIcon;
    edit.addEventListener("click", () => displayEdit(index));
    let deletetask = document.createElement("img");
    deletetask.id = index;
    deletetask.src = trashIcon;
    deletetask.addEventListener("click", () => removeTask(index));
    todo.appendChild(edit);
    todo.appendChild(deletetask);
    return todo;
  }
  static createproject(name, index) {
    if (name == "Home") {
      return;
    }
    name.length > 10 ? (name = name.slice(0, 9) + "...") : (name = name);
    let project = document.createElement("li");
    let projectName = document.createElement("span");
    projectName.textContent = name;
    projectName.addEventListener("click", () => showProject(index));
    project.id = index;
    let deleteProject = document.createElement("img");
    deleteProject.addEventListener("click", () => deleteThisProject(index));
    deleteProject.src = trashIconW;
    project.appendChild(projectName);
    project.appendChild(deleteProject);
    return project;
  }
}

const listeners = (() => {
  let tasksThisWeek = document.querySelector(".week");
  let homeTasks = document.querySelector(".home");
  tasksThisWeek.addEventListener("click", () => showWeeklyTasks());
  homeTasks.addEventListener("click", renderHome);
})();

function showWeeklyTasks() {
  document.querySelector(".addtask").id = "hidden";
  let todos = projectClass.weeklyTasks();
  let current = document.querySelector(".current");
  current.textContent = "Weekly Tasks";
  let taskList = document.querySelector(".tasks");
  taskList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    taskList.appendChild(
      uiComponents.createtask(todos[i].name, todos[i].date, i)
    );
  }
}
/* Run on deletethisProject */
function renderHome() {
  showProject(0);
}

function displayEdit(index) {
  let id = document.querySelector(".current").id;
  forms.editTaskForm.addEventListener("submit", (e) => editTask(e, index, id));
  forms.editTaskForm.showModal();
}

function render(projects) {
  let projectList = document.querySelector(".myProjects");
  projectList.innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name != "Home") {
      projectList.appendChild(uiComponents.createproject(projects[i].name, i));
    }
  }
}

function deleteThisProject(index) {
  projectClass.removeProject(index);
  render(projects);
  storage.savetoStorage();
  renderHome();
}

function showProject(index) {
  document.querySelector(".addtask").id = "visible";
  const tasksList = document.querySelector(".tasks");
  let current = document.querySelector(".current");
  current.id = index;
  current.textContent = projects[index].name;
  tasksList.innerHTML = "";
  for (let i = 0; i < projects[index].tasks.length; i++) {
    tasksList.appendChild(
      uiComponents.createtask(
        projects[index].tasks[i].name,
        projects[index].tasks[i].date,
        i
      )
    );
  }
}

function removeTask(index) {
  let id = document.querySelector(".current").id;
  console.log(id);
  console.log(index);
  projectClass.deleteTask(id, index);
  showTodo();
  storage.savetoStorage();
}

export { uiComponents, render, showProject, listeners };
