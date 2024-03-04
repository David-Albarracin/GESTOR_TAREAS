import {taskService} from './../services/taskService.js'


//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/`
    <h2>Tareas Pendientes</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha de Inicio</th>
          <th>Fecha de Final</th>
          <th>Encargado</th>
          <th>Prioridad</th>
          <th>Estado</th>
          <th></th>
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
        const tasks = await taskService.loadTasks();
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
        <tr id="${task.nameTask}">
          <td>${task.nameTask}</td>
          <td>${task.startDate}</td>
          <td>${task.endDate}</td>
          <td>${task.person}</td>
          <td>${task.taskType}</td>
          <td>${task.status}</td>
          <td>
            <button class="btn btn-success btn-ok">Terminada</button>
            <button class="btn btn-danger btn-error">Cancelar</button>
          </td>
        </tr>
      `;

      return row;
    }

}

customElements.define("task-list", TaskList);
