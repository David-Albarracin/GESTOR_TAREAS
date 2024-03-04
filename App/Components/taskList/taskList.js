
import {taskService} from '/app/services/taskService.js'


//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/`
    <h2>Task List</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Person</th>
          <th>Task Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="taskTable">
      </tbody>
    </table>
`;

//COMPONENT
export class TaskList extends HTMLElement {
    constructor(){
        super();
        this.render();
    }

    async render(){
        //load Component and template  
        const html = template.content.cloneNode((true));
        const tasks = taskService.tasks.length > 0? taskService.tasks : await taskService.loadTasks() 
        tasks.forEach(task => {
          html.querySelector('#taskTable').innerHTML += this.createTableRow(task)
        });
        this.appendChild(html);
    };

    newTask = (task) => {
        document.querySelector('#taskTable').innerHTML += this.createTableRow(task)
    }

    createTableRow(task) {
        const row = `
          <tr>
            <td>${task.nameTask}</td>
            <td>${task.startDate}</td>
            <td>${task.endDate}</td>
            <td>${task.person}</td>
            <td>${task.taskType}</td>
            <td>
              <button class="btn btn-success btn-ok">OK</button>
              <button class="btn btn-danger btn-error">Error</button>
            </td>
          </tr>
        `;
        return row;
    }
  
    

}


customElements.define("task-list", TaskList);
