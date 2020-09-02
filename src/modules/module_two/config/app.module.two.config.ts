
import { ILocationProvider, IController, IScope } from "angular";
import { IStateProvider, IUrlRouterProvider, IState, IStateParamsService } from "angular-ui-router";
import HomeTwoController from "../controllers/HomeTwo/HomeTwoController";
// import HomeController from "../controllers/Home/HomeController";

class TwoConfiguration {
    
    constructor(
        private $stateProvider: IStateProvider,
        private $urlRouterProvider: IUrlRouterProvider,
        private $locationProvider: ILocationProvider) {
            this.init();
            console.log("Router");
        }
        
    
    public init() : void {
        this.$stateProvider.state(TwoConfiguration.homeState());   
        this.$urlRouterProvider.otherwise("/homeone");
    }


    public static homeState() : IState {
        return {
            name:"HomeTwo",
            url: "/hometwo",
            template:"<div>HomeTwo</div>",
            // templateUrl:"../src/pages/home/home.html",
            controller:HomeTwoController,
            controllerAs: 'ctrl2'
        };
    }
}

export default TwoConfiguration;