export class EventPausedDirective implements ng.IDirective {
	link = (scope: any, el: any, attrs: any) => {
		el.on('pause', function(e: any){
			scope.$apply(function(){
				scope.eventPaused();
			});
		})
	}

    constructor() {
    }

    scope = {
    	eventPaused: '&'
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new EventPausedDirective();
        directive.$inject = [];

        return directive;
    }
}