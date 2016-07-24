export class ContentBoxDirective implements ng.IDirective {
    restrict = 'E';
    templateUrl = './views/contentBox.html';

    controller = ($scope: any) => {
        console.log($scope);
        $scope.shown = true; 

        $scope.close = () => {
            $scope.shown = false;
        } 

        $scope.message = 'Transclusion message from directive controller';
    };

    transclude = true;

    scope = true;

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new ContentBoxDirective();
        directive.$inject = [];

        return directive;
    }
}