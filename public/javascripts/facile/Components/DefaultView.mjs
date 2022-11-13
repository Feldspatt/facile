import {Component} from "./Component.mjs";
import {DefaultNavbar} from "./DefaultNavbar.mjs";

export class DefaultView extends Component{
    static route = "default"

    constructor(title= null, url, navbarClass = DefaultNavbar){
        super()
        this.title = title ?? this.constructor.name
        this.navbar = new navbarClass()
        this.url = url ?? this.constructor.route
    }

    navbar
    url


    async getTemplate() {
        return `
            <div>
                <h1>default view</h1>
                <p>Pim pam pum</p>
            </div>`
    }



    async setView(){

        let promises = []
        promises.push(this.navbar.getElement())
        promises.push(this.getElement())

        let [navbarEl, contentEl] = await Promise.all(promises)


        document.getElementById("navbar").append(navbarEl)
        document.getElementById("content").append(contentEl)

        document.title = this.title
    }



    /**
     * Override the default component method to also unset the navbar
     * @returns {Promise<void>}
     */
    async unsetElement(){
        await this.navbar.unsetElement()
        if(this.element) this.element.remove()
    }

}