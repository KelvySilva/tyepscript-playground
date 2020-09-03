
import { ILocationProvider } from "angular";
import { IStateProvider, IUrlRouterProvider, IState, IStateParamsService } from "angular-ui-router";
import HomeOneController from "../controllers/HomeOne/HomeOneController";
// import HomeController from "../controllers/Home/HomeController";

class ModuleOneConfiguration {
    
    constructor(
        private $stateProvider: IStateProvider,
        private $urlRouterProvider: IUrlRouterProvider,
        private $locationProvider: ILocationProvider) {
            this.init();
            console.log("Router One");
        }
        
    
    public init() : void {
        this.$stateProvider.state(ModuleOneConfiguration.homeState());
        // this.$urlRouterProvider.otherwise("/homeone");        
    }


    public static homeState() : IState {
        return {
            name:"HomeOne",
            url: "/homeone",
            template:"<div>HomeOne</div>",
            // templateUrl:"../src/pages/home/home.html",
            controller:HomeOneController,
            controllerAs: 'ctrl1'
        };
    }
}

export default ModuleOneConfiguration;