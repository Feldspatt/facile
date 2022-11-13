import {DefaultView} from "../facile/Components/DefaultView.mjs";

export class ThirdView extends DefaultView {
    static route = "thirdview"

    constructor() {
        super("Third View");

    }

    async getTemplate() {
        return `
            <div>
                <h1>Third View</h1>
                <p>Third view content</p>
            </div>
    `
    }

}