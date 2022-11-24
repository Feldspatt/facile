import slot from "../facile/helpers/slot.js";
import Button from "../components/Button.js";
import {View} from "../facile/components/View.mjs";

export class SlotAndComponentView extends View {
    static route = "slotandcomponent"

    constructor() {
        super("Slot and Component View");

    }

    async getTemplate() {
        return `
            <div>
                <h1>Slot and Component View</h1>
                <p>This view content is defined by a slot and a component</p>
                ${slot("myBtn")}
            </div>
    `
    }

    async bindJavascript() {
        await super.bindJavascript()

        let button = new Button("Click on me", () => {alert("button clicked")})

        await this.fillSlot("myBtn", await button.getElement())
    }

}