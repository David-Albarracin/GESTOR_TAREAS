export class Home extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    async render(){
        
        // const response = await fetch('./App/Components/home/home.html');
        // const template = await response.text();
        // this.innerHTML = template;
    };
};

customElements.define('home-component', Home);