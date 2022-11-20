import {Component} from "./Component.mjs";
import {ViewLink} from "./ViewLink.js";
import slot from "../helpers/slot.js";
import {defaultViewClasses} from "../../app.mjs";

export class Navbar extends Component {

    constructor(){
            super()
    }



    async getTemplate() {

        let linksSlots = ""
        for(let i = 0; i< defaultViewClasses.length; i++){
            linksSlots += `
                <div class="navbar-item">
                    ${slot(i)}
                </div>
                `
        }

        return `
        <div class="navbar">
            <div class="navbar-left">
                ${linksSlots}
            </div>
        </div>
        `
    }


    async bindJavascript() {
        await super.bindJavascript()

        let slotMap = new Map()

        for (let i in defaultViewClasses) {
            let viewClass = defaultViewClasses[i]
            slotMap.set(i, await new ViewLink(viewClass.route, viewClass.name).getElement())
        }

        await this.fillSlots(slotMap)
    }
}
