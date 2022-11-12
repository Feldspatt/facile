import {DefaultView} from "./DefaultView.mjs";

export class Home extends DefaultView{
    constructor(){
        super("Home", "home");
    }


    async getTemplate() {
        return `
            <div>
                <h1>Home</h1>
                <p>Shirlibado</p>
            </div>
    `
    }

}