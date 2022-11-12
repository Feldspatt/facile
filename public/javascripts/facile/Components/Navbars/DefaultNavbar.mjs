import {Component} from "../Component.mjs";
import {ViewLink} from "../ViewLink.js";

export class DefaultNavbar extends Component {

    constructor(){
            super()
    }
    async getTemplate() {
        return `
        <div class="navbar">
            <div class="navbar-left">
                <div class="navbar-item">
                    <input data-slot="home-link">
                </div>
                <div class="navbar-item">
                    <input data-slot="login-link">
                </div>
            </div>
        </div>
        `
    }

    async initElement(){
        await super.initElement()

        let homeLink = new ViewLink("home", "Home")
        let loginLink = new ViewLink("login", "Login")

        let hLinkEl = await homeLink.getElement()
        let lLinkEl = await loginLink.getElement()

        await this.fillSlot("home-link", hLinkEl)
        await this.fillSlot("login-link", lLinkEl)
    }
}
