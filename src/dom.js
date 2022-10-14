import trashIcon from "./asset/trash-can-outline.svg";
import pencilIcon from "./asset/pencil.svg";
import trashIconW from "./asset/trashcanwhite.svg";
import { projects, project as projectClass } from "./data";

class uiComponents {
  static createtask(name, date, index) {
    let todo = document.createElement("div");
    todo.classList.add(index);
    todo.classList.add("todo");
    let leftDiv = document.createElement("div");
    todo.appendChild(leftDiv);
    let completeButton = document.createElement("button");
    completeButton.textContent = "✓";
    completeButton.addEventListener("click", (e) => alert("test"));
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
    edit.addEventListener("click", (e) => alert("test"));
    let deletetask = document.createElement("img");
    deletetask.src = trashIcon;
    deletetask.addEventListener("click", (e) => alert("test"));
    todo.appendChild(edit);
    todo.appendChild(deletetask);
    return todo;
  }
  static createproject(name, index) {
    index = index + 1;
    name.length > 10 ? (name = name.slice(0, 9) + "...") : (name = name);
    let project = document.createElement("li");
    let projectName = document.createElement("span");
    projectName.textContent = name;
    projectName.addEventListener("click", () => showProject(index));
    project.id = index;
    let deleteProject = document.createElement("img");
    deleteProject.addEventListener("click", () => deleteThisProject(index))
    deleteProject.src = trashIconW;
    project.appendChild(projectName);
    project.appendChild(deleteProject);
    return project;
  }
}

/* Run on deletethisProject */
function renderHome() {

}



function render(projects) {
  let projectList = document.querySelector(".myProjects");
  projectList.innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    projectList.appendChild(uiComponents.createproject(projects[i].name, i));
  }
}

function deleteThisProject(index) {
    projectClass.removeProject(index);
    render(projects);
}

function showProject(index) {
    index = index - 1
    const tasksList = document.querySelector('.tasks')
    let current = document.querySelector('.current')
    current.id = index
    current.textContent = projects[index].name
    tasksList.innerHTML = ''
    for (let i = 0; i < projects[index].tasks.length; i++) {
        tasksList.appendChild(uiComponents.createtask(projects[index].tasks[i].name, projects[index].tasks[i].date, i))
    }
}




export { uiComponents, render, showProject };
