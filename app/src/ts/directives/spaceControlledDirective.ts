export class SpaceSupportDirective implements ng.IDirective {
	link = (scope: any, el: any, attrs: any) => {
		$('body').on('keypress', function(e) {
			var videoElement = el[0];
			if(e.keyCode === 32){
				if(videoElement.paused){
					videoElement.play();
				}else{
					videoElement.pause();
				}
			}
		});
	}

    constructor() {
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new SpaceSupportDirective();
        directive.$inject = [];

        return directive;
    }
}