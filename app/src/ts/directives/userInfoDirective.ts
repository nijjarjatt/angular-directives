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
        $scope.dummy = 'Dummy Data';

        $scope.tagUser = (user:any) => {
            user.tag = true;
        }

        $scope.collapse = () => {
            $scope.collapsed = !$scope.collapsed;
        }

        $scope.removeFriend = (friend: any) => {
            let idx = $scope.user.friends.indexOf(friend);
            if(idx> -1){
                $scope.user.friends.splice(idx,1);
            }
        }

        $scope.nextState = () => {  
            $scope.user.level++; 
            $scope.user.level = $scope.user.level % 3; 
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