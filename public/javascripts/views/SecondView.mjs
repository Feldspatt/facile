import {DefaultView} from "../facile/Components/DefaultView.mjs";

export class SecondView extends DefaultView {
    static route = "secondview"

    constructor() {
        super("Second View");

    }

    async getTemplate() {
        return `
            <div>
                <h1>Second View</h1>
                <p>second view content</p>
            </div>
    `
    }

}