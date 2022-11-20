import {Component} from "../facile/components/Component.mjs";
import slot from "../facile/helpers/slot.js";
import Button from "./Button.js";
import {credentials} from "../app.mjs";

export class Login extends Component {
    constructor(onLogin = ()=>{}, onCancel= ()=>{}) {
        super();
        this.onLogin = onLogin;
        this.onCancel = onCancel;
    }

    async getTemplate() {
        return`
            <div>
                <h1>Login</h1>
                <div>
                    <div>
                        <label for="isLoggedIn">Logged in:</label>
                        <input type="checkbox" id="isLoggedIn">
                    </div>
                    <div>
                        ${slot("login")}
                        ${slot("cancel")}
                    </div>
                </div>
            </div>
    `}

    async bindJavascript() {
        await super.bindJavascript()

        this.element.querySelector("#isLoggedIn").addEventListener("change", (e) => {
            credentials.isLoggedIn = e.target.checked
        })

        let loginButton = new Button("Login", async () => {
            if (this.element.querySelector("#isLoggedIn").checked) {
                await this.onLogin()
            } else {
                alert("login failed")
            }
        })

        let cancelButton = new Button("Cancel", async () => {
            await this.onCancel()
        })

        await this.fillSlots(new Map([
            ["login", await loginButton.getElement()],
            ["cancel", await cancelButton.getElement()],
        ]))
    }

}