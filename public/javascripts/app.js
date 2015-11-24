'use strict';

var mongomartApp = angular.module('mongomartApp', [
  'ngRoute',
  'mongomartControllers',
  'ngAnimate'
]);

mongomartApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/items', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl'
      }).
      when('/items/:itemId', {
        templateUrl: 'partials/item-detail.html',
        controller: 'ItemDetailCtrl'
      }).
      otherwise({
        redirectTo: '/items'
      });
  }]);
