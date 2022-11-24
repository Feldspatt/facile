import {Router} from "./facile/Router.mjs";
import {Index} from "./views/Index.mjs";
import {SecondView} from "./views/SecondView.mjs";
import {ModalGuardedView} from "./views/ModalGuardedView.mjs";
import {LoginView} from "./views/LoginView.js";
import {SlotView} from "./views/SlotView.js";
import {SlotAndComponentView} from "./views/SlotAndComponentView.js";
import {TemplateView} from "./views/TemplateView.js";
import {TemplateAndBindView} from "./views/TemplateAndBindView.js";
import {LoginPageGuardedView} from "./views/LoginPageGuardedView.js";


// These is only for demonstration purpose. Login should be handled in a more secure way.
export const credentials = {
    isLoggedIn: false,
    privileges: []
}


export const defaultViewClasses = [
    Index,
    LoginView,
    TemplateView,
    TemplateAndBindView,
    SlotView,
    SlotAndComponentView,
    ModalGuardedView,
    LoginPageGuardedView
]

export const router = new Router(defaultViewClasses)

router.goToView(window.location.pathname.slice(1))

