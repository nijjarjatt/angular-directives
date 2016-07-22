export class RemoveFriendDirective implements ng.IDirective {
    restrict = 'E';
    templateUrl = './views/removeFriend.html';
    scope = {
        notifyParentToRemoveFriend: '&removeMethod'
    };

    controller = ($scope: any) => {
        $scope.removing = false;

        $scope.startRemoving = () => {
            $scope.removing = true;
        }

        $scope.cancelRemoving = () => {
            $scope.removing = false;
        }

        $scope.callRemove = () => {
            $scope.notifyParentToRemoveFriend();
        }
    };

    constructor() {
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new RemoveFriendDirective();
        directive.$inject = [];

        return directive;
    }
}