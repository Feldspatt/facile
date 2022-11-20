import {View} from "../facile/components/View.mjs";
import slot from "../facile/helpers/slot.js";
import {Login} from "../components/Login.js";

export class LoginView extends View{
    static route= "loginview"

    constructor() {
        super("Login");
    }


    async getTemplate(){
        return `
            <div>
                ${slot("login")}
            </div>
        `;
    }

    async bindJavascript(){
        await super.bindJavascript()

        let loginComponent = new Login()

        await this.fillSlots(new Map([
            ["login", await loginComponent.getElement()]
        ]))
    }
}