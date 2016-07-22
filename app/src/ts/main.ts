/// <reference path="../../../typings/index.d.ts" />

import * as directives from "./directives";
import * as controllers from "./controllers";

let app = angular.module('dirApp', []);

app
	.controller('appCtrl', controllers.AppCtrl)

	.directive('userInfo', directives.UserInfoDirective.factory())
	.directive('address', directives.AddressDirective.factory())
	.directive('removeFriend', directives.RemoveFriendDirective.factory())
	.directive('spaceControlled', directives.SpaceSupportDirective.factory())	
	.directive('eventPaused', directives.EventPausedDirective.factory())		
	.directive('customClick', directives.CustomClickDirective.factory())	
	.directive('stateDisplay', directives.StateDisplayDirective.factory());

