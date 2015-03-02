'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
 
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/mission', {
        templateUrl: 'partials/mission.html'
      }).
          when('/homebase', { 
        templateUrl: 'partials/homebase.html'
      }).
          when('/contact', {
        templateUrl: 'partials/contact.html'
      }). 
      otherwise({
        redirectTo: '/homebase.html'
      });
  }]);

