'use strict';

/**
 * @ngdoc function
 * @name webPortfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webPortfolioApp
 */
angular.module('webPortfolioApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
