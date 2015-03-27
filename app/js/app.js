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
          when('/warranty', {
        templateUrl: 'partials/warranty.html'
      }). 
           when('/Product1', {
        templateUrl: 'partials/Product1.html'
      }). 
      otherwise({
        redirectTo: '/homebase'
      });
  }]);

