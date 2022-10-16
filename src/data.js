import storage from "./projectinit";

let projects = storage.getProjects();

class project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.id = projects.length;
  }

  static addTask(name, date, id) {
    projects[id].tasks.push({ name: name, date: date });
  }

  static deleteTask(id, index) {
    projects[id].tasks.splice(index, 1);
    console.log(projects[id].tasks);
  }

  static weeklyTasks() {
    let AllTodo = [];
    projects.forEach((proj) => {
      for (let i = 0; i < proj.tasks.length; i++) {
        AllTodo.push(proj.tasks[i]);
      }
    });
    let weeklyTodo = [];
    AllTodo.forEach((todo) => {
      let nextWeek = new Date();
      nextWeek.setDate(new Date().getDate() + 7);
      if (Date.parse(nextWeek) > Date.parse(todo.date)) {
        weeklyTodo.push(todo);
      }
    });
    return weeklyTodo;
  }

  static removeProject(index) {
    projects.splice(index, 1);
  }
}

export { projects, project };
