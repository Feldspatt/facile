import {Guard} from "../facile/Guard.js";
import {credentials, router} from "../app.mjs";
import {Login} from "../components/Login.js";
import Modal from "../components/Modal.mjs";

export default class extends Guard {

    async guard(route, params) {
        console.log("credentials", credentials.isLoggedIn)
        if(credentials.isLoggedIn) return Promise.resolve(true)
        else {
            await this.createLoginModal(route, params)
            return Promise.resolve("stop")
        }
    }

    async createLoginModal(route, params) {
        let modal = new Modal()


        let onLogin = ()=> {
            router.goToView(route, params)
            modal.removeElement()
        }


        let login = new Login(onLogin)
        modal.content =  await login.getElement()

        await modal.show()
    }

}