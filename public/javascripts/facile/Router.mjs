export class Router {
    constructor(viewClasses){
        this.viewClasses = viewClasses;
        this.setBrowserHistory()
    }

    views = new Map()
    currentView = null

    async goToView(route, params = [], forceNewView = false, pushState = true) {
        console.log("goToView", route, params)
        console.log("forceNewView", forceNewView)
        if(this.currentView?.url === route) {
            console.warn(`Already on ${route} view`)
            return
        }

        let previousView = this.currentView;

        let foundState = this.views.get(route)
        if(foundState && !forceNewView){ this.views.delete(route)}

        let viewClass = this.viewClasses.find(view => view.route === route?.split("/")[0])
        if (!viewClass) {
            viewClass = this.viewClasses[0]
            console.warn(`View ${route} not found, using default view`)
        }



        async function createView(viewClass, params = [], state = null){
            let view = await new viewClass(...params)
            if(state) await view.importState(state)
            return view
        }



        async function switchView(currentView, views) {
            if(previousView) {
                views.set(previousView.url, previousView.getState) // Store the previous view state in the views map
                await previousView?.removeElement()
            }

            if(pushState) history.pushState({route}, route, currentView.url) //History only store the route of the view
            await currentView.setView()
            console.log("view set: " + currentView.url)
        }



        if(viewClass.guardClass) {
            let guard = new viewClass.guardClass()
            switch (await guard.awaitAnswer(route, params)) {
                case "allow":
                    console.log("allow")
                    this.currentView = await createView(viewClass, params, foundState)
                    await switchView(this.currentView, this.views)
                    break;
                case "redirect":
                    console.log("redirecting to " + viewClass.redirect)
                    await this.goToView(this.currentView.redirect, {})
                    break;
                case "stop":
                    console.log("guard stopped")
                    break;
                default:
                    console.error("guard answer not recognized: " + guard.answer)
            }
        }
        else  {
            this.currentView = await createView(viewClass, params, foundState)
            await switchView(this.currentView, this.views)
        }
    }

    setBrowserHistory(){
        window.addEventListener('popstate', async (event) => {
            if(event.state){
                await this.goToView(event.state.route, undefined, false,false)
            }
        })
    }

}
