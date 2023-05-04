import config from "../components/config.js";

export default class mySelect extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await ((await fetch(config.uri(mySelect.url))).text())
    }
    constructor(){
        super();
        
        console.log("Etiqueta 'my-select' renderizada");
    }
    handleEvent(e){
        (e.type == "click") ? this.enviarWorker() : undefined;
    }
    enviarWorker(){
        console.log("Hola buenas tardes");
    }
    connectedCallback(){
        this.attachShadow({mode: "open"});
        Promise.resolve(mySelect.components()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.myBtns = this.shadowRoot.querySelector(".button").addEventListener("click", this.handleEvent.bind(this))
        })
    }
}

customElements.define(config.name(mySelect.url), mySelect)