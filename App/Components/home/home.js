//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  html`
<
<div class="container-xl">
    <div class="d-grid">
        <form class="col-lg-6 mt-3">
            
            <div class="mb-3">
                <label for="nameTask" class="form-label">Nombre de la Tarea: </label>
                <input type="text" class="form-control" id="nameTask" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
`;





export class Home extends HTMLElement {
    constructor(){
        super();
        this.render();
    }

    render(){
        //load Component and template  
        const html = template.content.cloneNode((true));
        
        this.appendChild(html);

    };
};

customElements.define('home-component', Home);