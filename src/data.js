let projects = []

class project {
    constructor(name) {
        this.name = name
        this.tasks = []
        this.id = projects.length
    }

    static addTask(name, date, id) {
        projects[id].tasks.push({name: name, date: date})
    }

    static deleteTask(id, index) {
        projects[id].tasks.splice(index, 1)
        console.log(projects[id].tasks);
    }



    static removeProject(index) {
        projects.splice(index, 1)
    }
}

export {projects, project}