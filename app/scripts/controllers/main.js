'use strict';

/**
 * @ngdoc function
 * @name webPortfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webPortfolioApp
 */
angular.module('webPortfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ];
    $scope.addTodo = function () {
      if ($scope.todos.indexOf($scope.todo) === -1) {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      }
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    }
  });
