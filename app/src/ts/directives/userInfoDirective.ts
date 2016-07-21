export class UserInfoDirective implements ng.IDirective {
    restrict = 'E';
    template = 'User Name:  {{user.name}} <br />' + 
    			'User Address: {{user.address}}';

    constructor() {
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new UserInfoDirective();
        directive.$inject = [];
        return directive;
    }
}