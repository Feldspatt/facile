import {Router} from "./facile/Router.mjs";
import {Index} from "./views/Index.mjs";
import {SecondView} from "./views/SecondView.mjs";
import {ThirdView} from "./views/ThirdView.mjs";
import {LoginView} from "./views/LoginView.js";


export const defaultViewClasses = [
    Index,
    SecondView,
    ThirdView,
    LoginView
]

export const router = new Router(defaultViewClasses)

router.goToView(window.location.pathname.slice(1))

