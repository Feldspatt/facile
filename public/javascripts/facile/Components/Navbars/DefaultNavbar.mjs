import {Component} from "../Component.mjs";
import {ViewLink} from "../ViewLink.js";
import slot from "../helpers/makeSlot.js";

export class DefaultNavbar extends Component {

    constructor(){
            super()
    }



    async getTemplate() {
        return `
        <div class="navbar">
            <div class="navbar-left">
                <div class="navbar-item">
                    ${slot("home-link")}
                </div>
                <div class="navbar-item">
                    ${slot("login-link")}
                </div>
            </div>
        </div>
        `
    }

    async initElement(){
        await super.initElement()

        let homeLink = new ViewLink("Home", "Home")
        let loginLink = new ViewLink("Login", "Login")

        let hLinkEl = await homeLink.getElement()
        let lLinkEl = await loginLink.getElement()

        await this.fillSlot("home-link", hLinkEl)
        await this.fillSlot("login-link", lLinkEl)
    }
}
