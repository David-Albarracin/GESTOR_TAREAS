export class NavMenu extends HTMLElement {
    constructor(){
        super();
        this.render();
    }


    render(){
        this.innerHTML = /*HTML*/`
        <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a data-link='["i"]' href="#" class="nav-link px-2 text-secondary">Home</a></li>
            <li><a data-link='["a"]' href="#" class="nav-link px-2 text-white">Features</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" class="nav-link px-2 text-white">About</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
            </form>

            <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
            <button type="button" class="btn btn-warning">Sign-up</button>
            </div>
        </div>
        </div>
        `;
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