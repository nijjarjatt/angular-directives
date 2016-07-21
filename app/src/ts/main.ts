/// <reference path="../../../typings/index.d.ts" />

import * as directives from "./directives";
import * as controllers from "./controllers";

let app = angular.module('dirApp', []);

app
	.controller('appCtrl', controllers.AppCtrl)
	.directive('userInfo', directives.UserInfoDirective.factory())
	.directive('address', directives.AddressDirective.factory());

