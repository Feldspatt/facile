export class Router {
    constructor(viewClasses){
        this.viewClasses = viewClasses;
        this.setBrowserHistory()
    }

    views = []
    currentView = null

    async goToView(route, params, pushState = true) {
        console.log("goToView", route, params)
        if(this.currentView?.url === route) {
            console.warn(`Already on ${route} view`)
            return
        }

        let previousView = this.currentView;


        let foundView = this.views.find(view => view.url === route)
        if(foundView){
            this.views.splice(this.views.indexOf(foundView), 1)
            this.currentView = foundView
        }
        else {

            let viewClass = this.viewClasses.find(view => view.route === route?.split("/")[0])
            if (!viewClass) {
                viewClass = this.viewClasses[0]
                console.warn(`View ${route} not found, using default view`)
            }

            this.currentView = await new viewClass()
        }

        this.views.push(this.currentView)


        //History only store the route of the view
        if(pushState) history.pushState({route}, route, this.currentView.url)


        async function switchView(currentView) {
            if (previousView) await previousView?.removeElement()
            await currentView.setView()
        }

        if(this.currentView.guard) {
            switch (await this.currentView.guard.defend()) {
                case "allow":
                    await switchView(this.currentView)
                    break;
                case "redirect":
                    await this.goToView(this.currentView.redirect, {}, pushState)
                    break;
                case "stay":
                    break;
            }
        }
        else  await switchView(this.currentView)
    }


    setBrowserHistory(){
        window.addEventListener('popstate', async (event) => {
            if(event.state){
                await this.goToView(event.state.route, {}, false)
            }
        })
    }

}
