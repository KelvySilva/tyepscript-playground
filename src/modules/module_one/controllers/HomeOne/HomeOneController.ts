import { IController, IScope } from "angular";
import { IStateProvider } from "angular-ui-router";

class HomeOneController implements IController {

    static $inject: string[] = ['$scope']

    public name:string = 'one';

    constructor(
        protected $scope: IScope
    ){
        
    }

    $onInit() {        
        console.log("HomeOneController");      
          
    }

}

export default HomeOneController;