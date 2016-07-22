export interface IAppCtrlScope extends ng.IScope{
	messages: any;
	clickMessage: any;
	user1: any;
	user2: any;
	handlePause(e: any): void;
	handleClick(message: any): void;
}

export class AppCtrl{
	static $inject = ['$scope'];

	constructor(protected $scope: IAppCtrlScope){
		this.$scope.messages= [];
		this.$scope.clickMessage = {
			data: 'I have not been clicked'
		};
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
			],
			level: 1
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
			],
			level: 0
		};

		this.$scope.handlePause = (e: any) => {
			this.$scope.messages.push({text: 'Paused!'});
			console.log('Video Paused');
			console.log(e);
		}

		this.$scope.handleClick = (message: any) => {
			message.data = 'I have been clicked!';
		} 
	}
}