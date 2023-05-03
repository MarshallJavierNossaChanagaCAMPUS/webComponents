let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "")

export default class myFooter extends HTMLElement {
    static async components(){
        return await ( (await fetch(pathName.replace(".js", ".html"))).text())
    }
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

myFooter.components()
customElements.define(name, myFooter)
