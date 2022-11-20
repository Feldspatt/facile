import {View} from "../facile/components/View.mjs";

export class Index extends View{
    static route= "index"

    constructor(){
        super("Index");

    }

    async getTemplate() {
        return `
        <div>
            <h1>Facile</h1>
            <p>A simple app framework</p>
            
            <h2>Introduction</h2>
                          
            <h3>HTML readable, javascript powerful</h3>
            <p>Defining HTML elements through javascript often leads to poor readability.
            On the other part, injecting HTML strings directly into the DOM deprive you of implementing powerful and basic javascript like eventListeners in an easy and consistent way.
            <em>Facile</em> turns your strings into HTMLElements, let you apply whatever magic you want to it, and insert it into the DOM.
            <em>Slots</em> makes the process of nesting components trivial.</p>
            
            <h3>Functional by default</h3>
            <p>Because it relies on inheritance to implement behavior, a component is already functional by default.
            The developer only have to define the parts that differs from the parent class.</p>
            
            <h3> Easy to understand</h3>
            <p>The code base is very concise and thoroughly documented.
            A newcomer can assimilate the principles and join a <em>Facile</em> project in a matter of minutes.</p>
            
            <h3>Easy to extend</h3>
            <p> The big functionalities of components are designed as a chain of little functions.
            This allows the developer to modify targeted part of a potentially complex behavior by overriding only one of this little functions.</p>
            
            <h3>Easy to maintain</h3>
            <p><em>Facile</em> design invite developers to assign responsibilities to views and components, avoiding the creation of a huge shared and disorganised state.
            In top of that, The hierarchical composition of the layout and the component lifecycle induces a top-down data-flow.
            The use of classes encourage the creation of structured and reusable components.
            Polymorphism leads developers to similarly structure comparable functionalities.
            Inheritance make documentation accessible: Look at the parent class to find documentation and guidelines.</p>
            
            <h3>Recycle and scale</h3>
            <p>Designing generic component make them adaptable to various projects. The choice of javascript modules permit a narrowed import of the required components.</p>
        
            <h3>Sweet, reliable and snappy navigation</h3>
            <p>By caching the view instance and using the history native api, <em>Facile</em> avoid repeating the api calls and long processes when returning to a visited view.
            The caching process is done by default, but can be overridden depending of the needs.
            It also provides a satisfactory experience with the navigation tools of the browser (previous, next, reload and url search)</p>
            
            <h3>Configurable and structured permission to access views</h3>
            <p></p>
            
            <h2>Undecided points</h2>
<!--            Todo: add a section about the undecided points-->
                <h3>Routes and caches</h3>
                    <h34>Routes declaration</h34>
                    <p>There is two kinds of routes, the route of the view instances and the routes of the view classes.<p>
                    
                    <h4>General/Detail view url</h4>
                    <h4>Caching/reloading view</h4>
                
          <h2>Framework composition</h2>
          
            <h3>Components</h3>
            <h3>Views</h3>
            <h3>Router</h3>
            <h3>Guard</h3>
                        
        </div>
    `
    }

}