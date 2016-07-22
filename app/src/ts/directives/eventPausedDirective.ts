export class EventPausedDirective implements ng.IDirective {	

    constructor(private $parse: ng.IParseService) {
    }

	link = (scope: any, el: any, attrs: any) => {
		var fn = this.$parse(attrs['eventPaused']);
		el.on('pause', (e: any) => {			
			scope.$apply(() => {
				fn(scope, {evt: event})
			});
		})
	}

    static factory(): ng.IDirectiveFactory {
        const directive = ($parse: ng.IParseService) => new EventPausedDirective($parse);
        directive.$inject = ['$parse'];

        return directive;
    }
}