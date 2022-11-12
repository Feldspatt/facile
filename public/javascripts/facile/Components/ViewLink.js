import {Component} from "./Component.mjs";
import stringToHTMLElement from "./helpers/stringToHtmlElement.mjs";
import {navi} from "../../app.mjs";

/**
 * Component used to navigate between views
 */
export class ViewLink extends Component{
    constructor(viewName, text){
        super();
        this.viewName = viewName;
        this.text = text;
    }

    async getTemplate() {
        return `<a href="#${this.viewName}">${this.text}</a>`;
    }

    async initElement(){
        this.element = stringToHTMLElement(await this.getTemplate());
        this.element.addEventListener("click", (e) => {
            e.preventDefault();
            navi.goToView(this.viewName);
        });
    }


}