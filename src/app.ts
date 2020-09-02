import { IModule, module, ILocationProvider } from 'angular';
import ModuleOneModule from './modules/module_one/ModuleOne';
import ModuleTwoModule from './modules/module_two/ModuleTwo';
import uiroute, { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

class App {

   private module: IModule;
   private moduleHomeOne:any;
   private moduleHomeTwo:any;

   constructor() {
      this.moduleHomeOne = new ModuleOneModule();
      this.moduleHomeTwo = new ModuleTwoModule();
      this.module = module("app",['ModuleOneModule','ModuleTwoModule']);
      // this.module.config(['$stateProvider','$urlRouterProvider','$locationProvider', 
      // ($stateProvider: IStateProvider, $routeProvider: IUrlRouterProvider, $locationProvider: ILocationProvider) => {
      //       $stateProvider.state("Inicial", {
      //          url:"/initial",
      //          templateUrl:'../src/pages/home.html',
      //          controllerAs:'ctrlInicial'
      //       });
      //       $routeProvider.otherwise("/initial");
      // }])   
   }
 
}

export default new App();