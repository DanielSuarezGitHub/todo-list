import {uiComponents} from './dom'
import forms from './form'
import './style.css'


export default forms

let tasks = document.querySelector('.tasks')
tasks.appendChild(uiComponents.createtask('Hello', '2007/22/22'))


