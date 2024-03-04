import '/app/Components/navMenu/navMenu.js'
import '/app/components/home/home.js'
import '/app/components/taskList/taskList.js'
import { homeTemplate } from '/app/Components/navMenu/navMenu.js';

document.addEventListener('DOMContentLoaded', (e) => {
    const main = document.querySelector('#main')
    main.innerHTML = homeTemplate;

})