import {Component} from "../facile/components/Component.mjs";
import slot from "../facile/helpers/slot.js";

export default class extends Component{

    /**
     *
     * @param content The dom element to be displayed in the modal
     */
    constructor(content) {
        super()
        this.content = content
    }

    async getTemplate() {
        return `
            <div>
                ${slot('content')}
            </div>
        `
    }

    async bindJavascript() {
        await super.bindJavascript()

        await this.fillSlot('content', this.content)

        let el = this.element

        el.addEventListener("click", (e) => {
            if(this.element === e.target) this.removeElement()
        })

        el.style.zIndex = "1000"
        el.style.position = "fixed"
        el.style.width = "100%"
        el.style.height = "100%"
        el.style.top = "0"
        el.style.left = "0"
        el.style.backgroundColor = "rgba(0,0,0,0.5)"
        el.style.display = "flex"
        el.style.justifyContent = "center"
        el.style.alignItems = "center"
    }

    async show() {
        await this.getElement()
        document.body.appendChild(this.element)
        console.log("modal shown")
    }
}