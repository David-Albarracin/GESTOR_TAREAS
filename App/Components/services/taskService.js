import {TaskList} from './../taskList/taskList.js';

class TaskService {
    urlData = './../../data/data.json';
    tasks = [];

    constructor() {
      
    }

    async loadTasks() {
        const response = await fetch(this.urlData);
        const data = await response.json();
        this.tasks = data.task;
        return data.task;
    }

    async saveData(task) {
        this.tasks.push(task);
        new TaskList().newTask(task);
    }

}

export const taskService = new TaskService();