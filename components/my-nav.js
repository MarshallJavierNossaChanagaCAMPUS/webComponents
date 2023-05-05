import config from "../config.js";

export default class myNav extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await((await fetch(config.uri(myNav.url))).text())
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        
        console.log("Etiqueta 'my-nav' renderizada");
    }
    handleEvent(e){
        (e.type == "click") ? this.enviarWorker(e) : undefined;
    }
    enviarWorker(e){
        console.log("Te lo advertí, autodestruccion en 3...2...1...");
    }
    connectedCallback(){
        Promise.resolve(myNav.components()).then(html => {
            this.shadowRoot.innerHTML = html
            this.myBtn = this.shadowRoot.querySelector(".button").addEventListener("click", this.handleEvent.bind(this))
        });
        
    }
}

myNav.components();
customElements.define(config.name(myNav.url), myNav);