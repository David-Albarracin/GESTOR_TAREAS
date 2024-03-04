import {TaskList} from './../taskList/taskList.js';

class TaskService {
    //urlData = './../../data/data.json'
    urlData = 'https://david-albarracin.github.io/GESTOR_TAREAS/App/data/data.json';
    tasks = [];

    constructor() {
      
    }

    async loadTasks() {
        try {
            const data = await fetch(this.urlData).then(res => res.json());
            this.tasks = data.task;
        } catch (error) {
            this.tasks = []
            console.log(error);
        }
        return this.tasks;
    }

    async saveData(task) {
        this.tasks.push(task);
        new TaskList().newTask(task);
    }

}

export const taskService = new TaskService();