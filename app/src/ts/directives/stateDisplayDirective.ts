export class StateDisplayDirective implements ng.IDirective {	

    constructor() {
    }

	link = (scope: any, el: any, attrs: any) => {
		var params = attrs['stateDisplay'].split(' ');
		var linkVar = params[0];
		scope.$watch(linkVar, (newValue: any) => {	
            el.css('background-color', params[newValue+1]);
		});
	}

    static factory(): ng.IDirectiveFactory {
        const directive = () => new StateDisplayDirective();
        directive.$inject = [];

        return directive;
    }
}