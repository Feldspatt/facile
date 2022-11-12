import stringToHTMLElement from "./helpers/stringToHtmlElement.mjs";

/**
 * The base component class. Should be extended.
 */
export class Component {
    constructor(){
        this.name = "component";
    }

    async getTemplate() {
        return `
        <div>
            <h1>default component content</h1>
        </div>
        `
    }

    /**
     * The DOM element of the component. Preferably, use getElement() instead.
     */
    element

    /**
     * A list of all the components that are children of this component. Filling it is the responsibility of the class writer.
     * @type {[Element]}
     */
    subComponents = []

    /**
     * Constructor cannot be asynchroneous, so this method is used to initialize the component
     * @returns {Promise<void>}
     */
    async init(){

    }

    /**
     * Get the DOM element of the component. Init the element if it is not already done.
     * In most cases, override initElement() instead of this method.
     * @returns {Promise<Element>}
     */
    async getElement(){
        if(!this.element) await this.initElement()
        return this.element
    }

    /**
     * Init the element by converting html to DOM. Can be overriden to do other things, like add event listeners.
     * @returns {Promise<void>}
     */
    async initElement(){
        this.element = stringToHTMLElement(await this.getTemplate())
    }

    /**
     * By default, remove the element from the DOM. Can be overriden to do other things.
     * @returns {Promise<void>}
     */
    async unsetElement(){
        console.log("component unset");
        if(this.element) this.element.remove()
    }

    /**
     * Replace an existing element marked by a data-slot value by another element.
     * @param slotName {string} The data-slot attribute value of the slot to replace
     * @param element {HTMLElement} The new element to replace the slot
     */
    async fillSlot(slotName, element){
        (await this.getElement()).querySelector(`[data-slot="${slotName.toString()}"]`).replaceWith(element);
    }
}