import config from "../components/config.js";

export default class mySection extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await((await fetch(config.uri(mySection.url))).text())
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        Promise.resolve(mySection.components()).then(html => {
            this.shadowRoot.innerHTML = html
        })
        console.log("Etiqueta 'my-section' renderizada");
    }
}

customElements.define(config.name(mySection.url), mySection);