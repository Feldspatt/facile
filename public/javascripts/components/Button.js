import {Component} from "../facile/components/Component.mjs";

export default class extends Component {
    constructor(text, onClick) {
        super();
        this.text = text;
        this.onClick = onClick;
    }

    async getTemplate() {
        return `
            <button>${this.text}</button>
        `
    }

    async bindJavascript() {
        await super.bindJavascript()
        this.element.addEventListener("click", this.onClick)
    }

}