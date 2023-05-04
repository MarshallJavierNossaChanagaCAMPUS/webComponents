import config from "../components/config.js";

export default class mySection extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await((await fetch(config.uri(mySection.url))).text())
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        console.log("Etiqueta 'my-section' renderizada");
    }
    handleEvent(e){
        (e.type == "click") ? this.enviarWorker() : undefined;
    }
    enviarWorker(){
        console.log("no hago nada >;)");
    }
    connectedCallback(){
        Promise.resolve(mySection.components()).then(html => {
            this.shadowRoot.innerHTML = html;
            this.myBtn = this.shadowRoot.querySelector(".button").addEventListener("click", this.handleEvent.bind(this))
        })
    }
}

customElements.define(config.name(mySection.url), mySection);