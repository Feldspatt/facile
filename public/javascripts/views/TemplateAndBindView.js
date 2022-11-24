import {View} from "../facile/components/View.mjs";

export class TemplateAndBindView extends View {
    static route = "templateandbindview"

    constructor() {
        super("Template and Bind View");

    }

    async getTemplate() {
        return `
            <div>
                <h1>Template and Bind View</h1>
                <p>This view content is defined by a template and bound to a bit of javascript</p>
                <button>Click on me</button>
            </div>
    `
    }

    async bindJavascript() {
        await super.bindJavascript()

        this.element.querySelector("button").addEventListener("click", () => {
            alert("button clicked")
        })
    }

}