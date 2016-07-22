export class UserInfoDirective implements ng.IDirective {
    restrict = 'E';
    templateUrl = './views/userInfo.html';
    replace= true;
    scope= {
        user: '=',
        initalCollapsed: '@collapsed'
    };
    controller = ($scope: any) => {
        $scope.collapsed = ($scope.initalCollapsed === 'true');
        $scope.tagUser = (user:any) => {
            user.tag = true;
        }

        $scope.collapse = () => {
            $scope.collapsed = !$scope.collapsed;
        }
    };

    constructor() {
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new UserInfoDirective();
        directive.$inject = [];

        return directive;
    }
}