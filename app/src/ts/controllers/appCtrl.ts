export interface IAppCttrlScope extends ng.IScope{
	user: any;
}

export class AppCtrl{
	static $inject = ['$scope'];

	constructor(protected $scope: IAppCttrlScope){
		this.$scope.user = {
			name: 'Bob Marley',
			address: {
				street: '123 Abc Boulevard',
				city: 'Orlando',
				province: 'FL'
			},
			friends: [
				'Rob',
				'Luc',
				'Jim'
			]
		};

		console.log(this.$scope);
	}
}