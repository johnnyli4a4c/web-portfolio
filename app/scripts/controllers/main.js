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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
