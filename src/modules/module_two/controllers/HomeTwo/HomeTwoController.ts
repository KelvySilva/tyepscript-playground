import { IController, IScope } from "angular";
import { IStateProvider } from "angular-ui-router";

class HomeTwoController implements IController {

    static $inject: string[] = ['$scope']

    public name:string = 'two';

    constructor(
        protected $scope: IScope
        ){

    }

    $onInit() {
        console.log("HomeTwoController");
        
    }

}

export default HomeTwoController;