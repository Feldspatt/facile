import {View} from "../facile/components/View.mjs";
import slot from "../facile/helpers/slot.js";

export class SlotView extends View {
    static route = "slotview"

    constructor() {
        super("Slot View");

    }

    async getTemplate() {
        return `
            <div>
                <h1>Slot View</h1>
                <p>This view content is defined by a slot</p>
                ${slot("myBtn")}
            </div>
    `
    }

    async bindJavascript() {
        await super.bindJavascript()

        let button = document.createElement("button")
        button.innerText = "Click on me"

        button.addEventListener("click", () => {
            alert("button clicked")
        })

        await this.fillSlot("myBtn", button)
    }

}