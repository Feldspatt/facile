import {View} from "../facile/Components/View.mjs";

export class SecondView extends View {
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