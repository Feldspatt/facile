import {Component} from "../facile/components/Component.mjs";
import slot from "../facile/helpers/slot.js";
import Button from "./Button.js";

export class Login extends Component {
    constructor(guard) {
        super();
        this.guard = guard;
    }

    async getTemplate() {
        return`
            <div>
                <h1>Login</h1>
                <div>
                    ${slot("login")}
                    ${slot("fail")}
                    ${slot("cancel")}
                </div>
                
            </div>
    `}

    async bindJavascript() {
        await super.bindJavascript()

        let loginButton = new Button("Login", () => {
            alert("login")
        })

        let cancelButton = new Button("Cancel", () => {
            alert("cancel")
        })

        let failButton = new Button("Fail", () => {
            alert("fail")
        })

        await this.fillSlots(new Map([
            ["login", await loginButton.getElement()],
            ["cancel", await cancelButton.getElement()],
            ["fail", await failButton.getElement()]
        ]))
    }

}