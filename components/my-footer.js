import config from "../config.js";

export default class myFooter extends HTMLElement {
    static url = import.meta.url;
    static async components(){
        return await ((await fetch(config.uri(myFooter.url))).text())
    }
    constructor(){
        super();
        //El attachShadow aisla del resto del DOM al componente, adjunta un nuevo shadowDOM
        this.attachShadow({mode: "open"});
        
        console.log('Etiqueta "my-footer" renderizada');
    }
    handleEvent(e){
        (e.type == "click") ? this.enviarWorker(e) : undefined;
    }
    enviarWorker(){
        console.log("8");
    }
    connectedCallback(){
        Promise.resolve(myFooter.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.myBtn = this.shadowRoot.querySelector(".button").addEventListener("click", this.handleEvent.bind(this))
        })
    }  
}

customElements.define(config.name(myFooter.url), myFooter)

