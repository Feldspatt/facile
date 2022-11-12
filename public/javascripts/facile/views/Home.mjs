import {DefaultView} from "../Components/Views/DefaultView.mjs";

export class Home extends DefaultView{
    constructor(){
        super("Home");

    }

    static route = "home"

    async getTemplate() {
        return `
            <div>
                <h1>Home</h1>
                <p>Shirlibado</p>
            </div>
    `
    }

}