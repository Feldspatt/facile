import {Router} from "./facile/Router.mjs";
import {Home} from "./views/Home.mjs";
import {SecondView} from "./views/SecondView.mjs";
import {ThirdView} from "./views/ThirdView.mjs";
import {Login} from "./views/Login.js";


const defaultViewClasses = [
    Home,
    SecondView,
    ThirdView,
    Login
]

export const router = new Router(defaultViewClasses)

router.goToView(window.location.pathname.slice(1))

