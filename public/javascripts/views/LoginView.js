import {View} from "../facile/components/View.mjs";
import slot from "../facile/helpers/slot.js";
import {Login} from "../components/Login.js";
import {router} from "../app.mjs";

export class LoginView extends View{
    static route= "loginview"

    constructor(redirectionRoute, redirectionParams) {
        super("Login");
        this.redirectedRoute = redirectionRoute
        this.redirectedParams = redirectionParams
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

        let onLogin = async ()=> {
            console.log("route: " + this.redirectedRoute)
            console.log("params: " + this.redirectedParams)

            await router.goToView(this.redirectedRoute, this.redirectedParams)
        }

        let loginComponent = new Login(onLogin)

        await this.fillSlots(new Map([
            ["login", await loginComponent.getElement()]
        ]))
    }
}