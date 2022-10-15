import {project, projects} from './data'
import { render, uiComponents } from './dom'



function createProject(e) {
    e.preventDefault()
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == forms.projectFormName.value) {
            alert('this project alreadt exists')
            return
        }
    }
    projects.push(new project(forms.projectFormName.value))
    formControl.closeFormProj()
    render(projects)
}

function createTask(e) {
    e.preventDefault()
    let id = document.querySelector('.current').id
    project.addTask(forms.taskFormName.value, forms.taskFormDate.value, id)
    showTodo()
    formControl.closeFormTask()
}


function editTask(e, index, id) {
    e.preventDefault()
    projects[id].tasks[index].name = forms.editTaskFormName.value
    projects[id].tasks[index].date = forms.taskFormDate.value
    forms.editTaskForm.close()
    showTodo()
}

function showTodo() {
    let id = document.querySelector('.current').id
    const tasksList = document.querySelector('.tasks')
    tasksList.innerHTML = ''
    for (let i = 0; i < projects[id].tasks.length; i++) {
        tasksList.appendChild(uiComponents.createtask(projects[id].tasks[i].name, projects[id].tasks[i].date, i))
    }
}

const formControl = (() => {
    function openFormProj() {
        const myModal = document.querySelector('.NewProj')
        myModal.showModal()
    }
    
    function closeFormProj() {
        const myModal = document.querySelector('.NewProj')
        myModal.close()
    }

    function openFormTask() {
        const myModal = document.querySelector('.NewTask')
        myModal.showModal()
    }
    
    function closeFormTask() {
        const myModal = document.querySelector('.NewTask')
        myModal.close()
    }

    return {closeFormProj, openFormProj, openFormTask, closeFormTask}
})()






const forms = (() => {
    const projectForm = document.querySelector('[data-new-proj-form]')
    const taskForm = document.querySelector('[data-new-task-form]')
    const projectFormName = document.querySelector('[data-new-proj-name]')
    const taskFormName = document.querySelector('[data-new-task-name]')
    const taskFormDate = document.querySelector('[data-new-task-date]')
    const openProjForm = document.querySelector('.projects button')
    const openTaskForm = document.querySelector('#addtask')
    const editTaskForm = document.querySelector('[data-edit-task-form]')
    const editTaskFormName = document.querySelector('[data-edit-task-name]')
    const editTaskFormDate = document.querySelector('[data-edit-task-date]')
    openTaskForm.addEventListener('click', formControl.openFormTask)
    taskForm.addEventListener('submit', createTask)
    openProjForm.addEventListener('click', formControl.openFormProj)
    projectForm.addEventListener('submit', createProject)
    return {projectFormName, taskFormName, taskFormDate, editTaskForm, editTaskFormDate, editTaskFormName}
})()


export { forms, showTodo, editTask }