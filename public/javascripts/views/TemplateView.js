import {View} from "../facile/components/View.mjs";

export class TemplateView extends View {
    static route = "templateview"

    constructor() {
        super("Template View");

    }

    async getTemplate() {
        return `
            <div>
                <h1>Template View</h1>
                <p>This view content is only defined by a template</p>
            </div>
    `
    }

}