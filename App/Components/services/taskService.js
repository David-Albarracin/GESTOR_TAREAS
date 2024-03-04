import {TaskList} from './../taskList/taskList.js';

class TaskService {
    //urlData = './../../data/data.json'
    urlData = 'https://github.com/David-Albarracin/GESTOR_TAREAS/blob/main/App/data/data.json';
    tasks = [];

    constructor() {
      
    }

    async loadTasks() {
        try {
            const response = await fetch(this.urlData);
            const data = await response.json();
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