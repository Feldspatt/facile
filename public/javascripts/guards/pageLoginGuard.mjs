import slot from "../facile/helpers/slot.js";
import {Guard} from "../facile/Guard.js";
import {credentials, router} from "../app.mjs";
import Modal from "../components/Modal.mjs";
import {Login} from "../components/Login.js";

export default class extends Guard {
    constructor() {
        super();
    }

    async guard(route, params) {
        console.log("credentials", credentials.isLoggedIn)
        if(credentials.isLoggedIn) return Promise.resolve(true)
        else {
            await router.goToView("loginview", [route, params])
            return Promise.resolve("stop")
        }
    }

    async createLoginModal(route, params) {
        let modal = new Modal()


        let onLogin = async ()=> {
            await router.goToView(route, params)
            await modal.removeElement()
        }


        let login = new Login(onLogin)
        modal.content =  await login.getElement()

        await modal.show()
    }

}