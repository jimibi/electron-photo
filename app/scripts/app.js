(function () {
  'use strict';

  var _templateBase = 'scripts/';

  angular.module('app', [
    'ngRoute',
    'ngMaterial',
    'ngAnimate'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: _templateBase + 'customer/customer.html' ,
      controller: 'customerCtrl',
      controllerAs: '_ctrl'
    });
    $routeProvider.otherwise({ redirectTo: '/' });
  }]);
})();
