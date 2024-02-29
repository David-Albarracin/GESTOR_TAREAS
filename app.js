import './app/components/navMenu/navMenu.js'
import './app/components/home/home.js'

document.addEventListener('DOMContentLoaded', (e) => {
    const main = document.querySelector('#main')
    main.innerHTML = "<home-component></home-component>";

})