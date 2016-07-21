export class UserInfoDirective implements ng.IDirective {
    restrict = 'E';
    templateUrl = './views/userInfo.html';
    replace= true;
    controller = ($scope: any) => {
        $scope.tagUser = (user:any) => {
            user.tag = true;
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