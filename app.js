// import '/app/Components/navMenu/navMenu.js';
// import '/app/components/home/home.js';
// import '/app/components/taskList/taskList.js';
// import { homeTemplate } from '/app/Components/navMenu/navMenu.js';

import 'https://github.com/David-Albarracin/GESTOR_TAREAS/blob/main/App/Components/navMenu/navMenu.js';
import 'https://github.com/David-Albarracin/GESTOR_TAREAS/blob/main/App/Components/home/home.js';
import 'https://github.com/David-Albarracin/GESTOR_TAREAS/blob/main/App/Components/taskList/taskList.js';
import { homeTemplate } from 'https://github.com/David-Albarracin/GESTOR_TAREAS/blob/main/App/Components/navMenu/navMenu.js';

document.addEventListener('DOMContentLoaded', (e) => {
    const main = document.querySelector('#main')
    main.innerHTML = homeTemplate;

})