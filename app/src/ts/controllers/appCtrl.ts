export interface IAppCtrlScope extends ng.IScope{
	messages: any;
	user1: any;
	user2: any;
	handlePause(e: any): void;
}

export class AppCtrl{
	static $inject = ['$scope'];

	constructor(protected $scope: IAppCtrlScope){
		this.$scope.messages= [];
		this.$scope.user1 = {
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

		this.$scope.user2 = {
			name: 'Rob Smith',
			address: {
				street: '567 Xyz Streey',
				city: 'Orlando',
				province: 'FL'
			},
			friends: [
				'Bob',
				'Luc',
				'Jim'
			]
		};

		this.$scope.handlePause = (e: any) => {
			this.$scope.messages.push({text: 'Paused!'});
			console.log('Video Paused');
			console.log(e);
		}
	}
}