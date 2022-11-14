import {View} from "../facile/Components/View.mjs";

export class Home extends View{
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