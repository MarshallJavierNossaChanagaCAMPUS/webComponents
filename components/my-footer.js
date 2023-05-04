import config from "../components/config.js";

export default class myFooter extends HTMLElement {
    static url = import.meta.url;
    static async components(){
        return await ((await fetch(config.uri(myFooter.url))).text())
    };
    constructor(){
        super();
        //El attachShadow aisla del resto del DOM al componente, adjunta un nuevo shadowDOM
        this.attachShadow({mode: "open"});
        Promise.resolve(myFooter.components()).then(html=>{
            this.shadowRoot.innerHTML = html
        })
        console.log('Etiqueta "my-footer" renderizada');
    }
}

customElements.define(config.name(myFooter.url), myFooter)