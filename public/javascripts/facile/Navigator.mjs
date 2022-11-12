import {DefaultView} from "./Components/Views/DefaultView.mjs"
import {Home} from "./Components/Views/Home.mjs"

const defaultViewClasses = [
    DefaultView,
    Home
]

/**
 * In charge of the navigation between views
 *
 */
export class Navigator{
    constructor(viewClasses = defaultViewClasses){
        this.viewClasses = viewClasses;
        this.views = []
        this.currentView = null;
    }

    async goToView(viewId) {
        let viewClass = this.viewClasses.find(route => route.name === viewId)
        if (!viewClass) viewClass = this.viewClasses[0]

        let previousView = this.currentView;

        let foundView = this.views.find(view => view.name === viewId)
        if(foundView){
            this.views.splice(this.views.indexOf(foundView), 1)
            this.currentView = this.views.find(view => view.name === viewClass.name)
        }
        else {
            this.currentView = await new viewClass()
            await this.currentView.init()
        }

        this.views.push(this.currentView)

        await previousView?.unsetElement()
        await this.currentView.setView()
    }

}
