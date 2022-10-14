let projects = []

class project {
    constructor(name) {
        this.name = name
        this.tasks = []
        this.id = projects.length
    }

    static addTask(name, date, id) {
        let index = projects[id].tasks.length
        projects[id].tasks.push({name: name, date: date, index: index})
    }



    static removeProject(index) {
        projects = projects.splice(index, 1)
    }
}

export {projects, project}