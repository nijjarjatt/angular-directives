export class AddressDirective implements ng.IDirective {
    restrict = 'E';
    templateUrl = './views/address.html';
    scope= true;

    controller = ($scope: any) => { 
    	$scope.collapsed = false;
        
        $scope.collapseAddress = () => {
        	$scope.collapsed = true;
        }

        $scope.expandAddress = () => {
        	$scope.collapsed = false;
        }
    };

    constructor() {
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new AddressDirective();
        directive.$inject = [];

        return directive;
    }
}