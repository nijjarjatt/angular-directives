export class CustomClickDirective implements ng.IDirective {	

    constructor(private $parse: ng.IParseService) {
    }

	link = (scope: any, el: any, attrs: any) => {
		var fn = this.$parse(attrs['customClick']);
		
		el.on('click', (e: any) => {			
			scope.$apply(() => {
				fn(scope);
			});
		})
	}

    static factory(): ng.IDirectiveFactory {
        const directive = ($parse: ng.IParseService) => new CustomClickDirective($parse);
        directive.$inject = ['$parse'];

        return directive;
    }
}