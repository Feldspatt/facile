import {View} from "../facile/components/View.mjs";
import ModalLoginGuard from "../guards/modalLoginGuard.mjs";

export class ModalGuardedView extends View {
    static route = "modalguardedview"
    static guardClass = ModalLoginGuard

    constructor() {
        super("Modal Guarded View");

    }

    async getTemplate() {
        return `
            <div>
                <h1>Modal Guarded View</h1>
                <p>This view is guarded by a login modal</p>
            </div>
    `
    }

}