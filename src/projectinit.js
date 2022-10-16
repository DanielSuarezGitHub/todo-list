import { projects } from "./data";

export default class storage {
  static savetoStorage() {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static getProjects() {
    return (
      JSON.parse(localStorage.getItem("todos")) || [
        { name: "Home", tasks: [], id: 0 },
      ]
    );
  }
}
