import {Component} from "./Component.mjs";
import stringToHTMLElement from "../helpers/stringToHtmlElement.mjs";
import {router} from "../../app.mjs";

/**
 * Component used to navigate between views
 */
export class ViewLink extends Component{
    constructor(route, text){
        super();
        this.route = route;
        this.text = text;
    }

    async getTemplate() {
        return `<a href="${this.route}">${this.text}</a>`;
    }

    async bindJavascript(){
        this.element = stringToHTMLElement(await this.getTemplate());
        this.element.addEventListener("click", (e) => {
            e.preventDefault();
            router.goToView(this.route);
        });
    }


}