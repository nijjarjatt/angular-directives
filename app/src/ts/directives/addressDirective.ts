export class AddressDirective implements ng.IDirective {
    restrict = 'E';
    templateUrl = './views/address.html';
    controller = ($scope: any) => { 
    	$scope.collapsed = false;
        
        $scope.collapseAddress = () => {
        	$scope.collapsed = true;
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