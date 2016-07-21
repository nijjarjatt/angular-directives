export class UserInfoDirective implements ng.IDirective {
    restrict = 'E';
    templateUrl = './views/userInfo.html';
    replace= true;
    scope= {
        user: '='
    };
    controller = ($scope: any) => {
        $scope.tagUser = (user:any) => {
            user.tag = true;
        }
        console.log($scope);
    };

    constructor() {
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new UserInfoDirective();
        directive.$inject = [];

        return directive;
    }
}