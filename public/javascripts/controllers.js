'use strict';

/* Controllers */

var mongomartControllers = angular.module('mongomartControllers', []);

mongomartControllers.controller('ItemListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://localhost:3000/items').success(function(data) {
      $scope.items = data;
    });

    $scope.itemOrder = 'title';
  }]);

mongomartControllers.controller('ItemDetailCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $scope.itemId = $routeParams.itemId;

    $http.get('http://localhost:3000/items/' + $routeParams.itemId).success(function(data) {
      $scope.item = data;
    });
  }]);
