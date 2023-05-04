import config from "../components/config.js";
import myFooter from "./my-footer.js";

export default class myHeader extends HTMLElement {
    static url = import.meta.url;
    static async components(){
        return await ((await fetch(config.uri(myHeader.url))).text())
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        Promise.resolve(myHeader.components()).then(html=>{
            this.shadowRoot.innerHTML = html
        })
        console.log('Etiqueta "my-header" renderizada');
    }
}

customElements.define(config.name(myHeader.url), myHeader)