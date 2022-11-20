import stringToHTMLElement from "../helpers/stringToHtmlElement.mjs";

/**
 * The base component class. Should be extended.
 * Flow: getTemplate -> initElement -> GetElement -> *exist* -> ?updateElement?  -> unsetElement
 */
export class Component {
    constructor(){
        this.name = "component";
    }

    /**
     * Make sure the returned string have only one component at the top level
     * '<div><span></span></div> -> ok,
     * '<div></div><span></span> -> not ok
     * @returns {Promise<string>}
     */
    async getTemplate() {
        return `
        <div>
            <h1>default component content</h1>
        </div>
        `
    }

    /**
     * a reference to the main DOM element of this component. Preferably, use getElement() instead.
     */
    element

    /**
     *
     * @type {{}}
     */
    state = {}

    /**
     * Get the DOM element of the component. Init the element if it is not already done.
     * In most cases, override initElement() instead of this method.
     * @returns {Promise<Element>}
     */
    async getElement(){
        if(!this.element) await this.bindJavascript()
        return this.element
    }

    /**
     * Init the element by converting html to DOM Element. Can be overriden to do other things, like add event listeners.
     * @returns {Promise<void>}
     */
    async bindJavascript(){
        this.element = stringToHTMLElement(await this.getTemplate())
    }

    /**
     * Remove the element from the DOM. Can be overriden to do other things.
     * @returns {Promise<void>}
     */
    async removeElement(){
        if(this.element) this.element.remove()
    }

    /**
     * Inside this element, replace an element marked by a data-slot value by another element.
     * @param slotName {String}
     * @param element {HTMLElement}
     * @returns {Promise<Component>}
     */
    async fillSlot(slotName, element){
        (await this.getElement()).querySelector(`[data-slot="${slotName.toString()}"]`).replaceWith(element)
    }

    /**
     *
     * @returns {Promise<Component>}
     * @param slotMap {Map<String,HTMLElement>}
     */
    async fillSlots(slotMap){
        let promises = []

        for(let [slotName, element] of slotMap){ promises.push(this.fillSlot(slotName, element)) }

        await Promise.all(promises)
    }
}