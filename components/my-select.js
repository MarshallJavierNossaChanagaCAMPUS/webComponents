import config from "../components/config.js";

export default class mySelect extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await ((await fetch(config.uri(mySelect.url))).text())
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        Promise.resolve(mySelect.components()).then(html => {
            this.shadowRoot.innerHTML = html
        })
        console.log("Etiqueta 'my-select' renderizada");
    }
}

customElements.define(config.name(mySelect.url), mySelect)