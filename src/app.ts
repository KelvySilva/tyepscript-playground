import { IModule, module, ILocationProvider } from 'angular';
import ModuleOneModule from './modules/module_one/ModuleOne';
import ModuleTwoModule from './modules/module_two/ModuleTwo';
import uiroute, { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';
import modules from './modules/index';

class App {

   private module: IModule;

   constructor() {
      // this.moduleHomeOne = new ModuleOneModule();
      // this.moduleHomeTwo = new ModuleTwoModule();
      modules.forEach(module => new module);
      this.module = module("app",[]);
      modules.map(module => {
         this.module.requires.push(module.name);
      });
      
      
      
      this.module.config(['$stateProvider','$urlRouterProvider','$locationProvider', 
      ($stateProvider: IStateProvider, $routeProvider: IUrlRouterProvider, $locationProvider: ILocationProvider) => {
            $stateProvider.state("Inicial", {
               url:"/initial",
               templateUrl:'../src/pages/home.html',
               controllerAs:'ctrlInicial'
            });
            $routeProvider.otherwise("/initial");
      }])   
   }
 
}

export default new App();