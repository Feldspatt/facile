import {View} from "../facile/components/View.mjs";
import PageLoginGuard from "../guards/pageLoginGuard.mjs";

export class LoginPageGuardedView extends View {
    static route = "loginpageguardediew"
    static guardClass = PageLoginGuard

    constructor() {
        super("Login View");
    }

    async getTemplate() {
        return `
            <div>
                <h1>Login View</h1>
                <p>This view is guarded by a login page</p>
            </div>
    `
    }
}