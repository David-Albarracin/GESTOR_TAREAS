import './App/Components/navMenu/navMenu.js'
import './App/Components/home/home.js'

document.addEventListener('DOMContentLoaded', (e) => {
    const main = document.querySelector('#main')
    main.innerHTML = "<home-component></home-component>";

})