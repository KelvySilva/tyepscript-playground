import { module, IModule,ILocationProvider } from "angular";
import uiroute, { IStateProvider, IUrlRouterProvider } from 'angular-ui-router'

import controllers from "./controllers/index";
import components from "./components/index";
import services from "./services/index";
import filters from "./filters/index";
import ModuleOneConfiguration from "./config/ModuleOneConfiguration";

class ModuleOneModule {

   private module: IModule;

   constructor() {
      this.module = module('ModuleOneModule', [uiroute]);  
      this.init();
   }  

   init() {

      this.module.config(['$stateProvider','$urlRouterProvider','$locationProvider', 
      ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider, $locationProvider: ILocationProvider) => {
         return new ModuleOneConfiguration($stateProvider, $urlRouterProvider, $locationProvider);
      }]);    
      controllers.forEach(controller => this.module.controller(controller.name , controller));
      components.forEach(component => this.module.component(component.NAME, new component));
      services.forEach(service => this.module.service(service.name, service));
      filters.forEach(filter => this.module.filter(filter.name, () => filter));
   }
      
}

export default ModuleOneModule;