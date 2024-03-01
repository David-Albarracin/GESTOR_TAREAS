
//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/`
<ul class="nav nav-pills test">
  <li class="nav-item "><a href="#" data-link='["i"]' class="nav-link active" aria-current="page">Inicio</a></li>
  <li class="nav-item"><a href="#" data-link='["c"]' class="nav-link">Tareas Completas</a></li>
  <li class="nav-item"><a href="#" data-link='["p"]' class="nav-link">Tareas Pendientes</a></li>
</ul>
`;

//COMPONENT
export class NavMenu extends HTMLElement {
    constructor(){
        super();
        this.render();
    }

    render(){
        //load Component and template  
        const html = template.content.cloneNode((true));
        this.appendChild(html);


        this.querySelectorAll('.nav-link').forEach(a => {
            a.addEventListener('click', (e) => {
                const url = JSON.parse(e.target.dataset.link)
                const main = document.querySelector('#main')
                switch (url[0]) {
                    case 'i':
                        main.innerHTML = "<home-component></home-component>";
                        break;

                    default:
                        main.innerHTML = `<h1>Page Not Fount</h1>`;
                        break;
                };
                e.stopImmediatePropagation();
                e.stopPropagation();
            });
        });
    };

}


customElements.define("nav-menu", NavMenu);
