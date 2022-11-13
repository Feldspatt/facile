import {DefaultView} from "../facile/Components/DefaultView.mjs";

export class Home extends DefaultView{
    static route= "home"

    constructor(){
        super("Home");

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