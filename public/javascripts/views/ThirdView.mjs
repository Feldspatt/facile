import {View} from "../facile/components/View.mjs";
import ModalLoginGuard from "../guards/modalLoginGuard.mjs";

export class ThirdView extends View {
    static route = "thirdview"
    static guardClass = ModalLoginGuard

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