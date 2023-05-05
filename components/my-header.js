import config from "../config.js";

export default class myHeader extends HTMLElement {
    static url = import.meta.url;
    static async components(){
        return await ((await fetch(config.uri(myHeader.url))).text())
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        
        console.log('Etiqueta "my-header" renderizada');
    }
    handleEvent(e){
        (e.type == "click") ? this.enviarWorker(e) : undefined;
    }
    enviarWorker(){
        const ws = new Worker("../ws.js", {type: "module"});

        ws.postMessage({mensaje: "shi"});

        ws.addEventListener("message", (e)=>{

            ws.terminate();
        })

        console.log("Soy don piola");
    }
    connectedCallback(){
        Promise.resolve(myHeader.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.myBtn = this.shadowRoot.querySelector(".button").addEventListener("click", this.handleEvent.bind(this));
        })
    }
}

customElements.define(config.name(myHeader.url), myHeader)