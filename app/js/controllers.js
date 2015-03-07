'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone, homebase, mission, contact, warranty, Product1) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'name';
  }]);


phonecatApp.controller('ListCtrl', function ($scope) {
  $scope.Banner = {
    'name': 'Valentines',
     'snippet': '...And love for everyone',
     'imageUrl': 'img/Grow-Labweed.jpg'
  };
});






// phonecatControllers.controller('CookieListCtrl', function ($scope, $http) {
//   $http.get('posts/posts.json').success(function(data) {
//     $scope.post = data;
//   });

//   $scope.orderProp = 'age';
// });


