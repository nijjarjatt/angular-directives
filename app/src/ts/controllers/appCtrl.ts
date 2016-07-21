export interface IAppCttrlScope extends ng.IScope{
	user: any;
}

export class AppCtrl{
	static $inject = ['$scope'];

	constructor(protected $scope: IAppCttrlScope){
		this.$scope.user = {
			name: 'Bob Marley',
			address: '12 ABC Street'
		};
	}
}