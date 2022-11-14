import {Component} from "./Component.mjs";
import {ViewLink} from "./ViewLink.js";
import slot from "./helpers/makeSlot.js";

export class Navbar extends Component {

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
                    ${slot("second-view-link")}
                </div>
                <div class="navbar-item">
                    ${slot("third-view-link")}
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

        let homeLink = new ViewLink("home", "Home")
        let secondViewLink = new ViewLink("secondview", "Second View")
        let thirdViewLink = new ViewLink("thirdview", "Third View")
        let loginLink = new ViewLink("login", "Login")

        let hLinkEl = await homeLink.getElement()
        let sLinkEl = await secondViewLink.getElement()
        let tLinkEl = await thirdViewLink.getElement()
        let lLinkEl = await loginLink.getElement()

        await this.fillSlot("home-link", hLinkEl)
        await this.fillSlot("second-view-link", sLinkEl)
        await this.fillSlot("third-view-link", tLinkEl)
        await this.fillSlot("login-link", lLinkEl)
    }
}
