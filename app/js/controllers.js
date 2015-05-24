'use strict';




var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope',
  function($scope, homebase, mission, contact, warranty, Product1) {
  
  }]);






phonecatApp.controller('ListCtrl', function ($scope) {
  $scope.Banner = {
        'name': 'Valentines',
     'snippet': '...And love for everyone',
    'imageUrl': 'img/Grow-Labweed.jpg'
  };
});








var buellApp = angular.module('buellApp', []);
buellApp.controller('GreetingController', ['$scope', function($scope)
{
	$scope.greeting = 'Hola! sinor Jamie, Como estas. I am a working controller';
	}]);




var foodList = angular.module('foodList', []);
foodList.controller('menuCookies', ['$scope', '$http', function($scope, $http) 
{
  $http.get('posts/posts.json').success(function(data) {
    $scope.posts = data;
  });

  $scope.orderProp = 'name';
}]);





var myApp = angular.module('myApp',['ui.bootstrap']);



myApp.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isCollapsed = false;
});

myApp.controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };


  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];


  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
});




// foodList.controller('CookieListCtrl', ['$scope', '$http', function($scope, $http) {
//   $http.get('posts/posts.json').success(function(data) {
//     $scope.posts = data;
//   });

//   $scope.orderProp = 'age';
// }]);


// foodList.controller('menuCookies', function($scope) {
//   $scope.posts = [
//     {
        
//         "id": "chochChip", 
//         "imageUrl": "img/cookies/chocChip.jpg", 
//         "name": "chocChip", 
//         "snippet": "A delicous Chocolate chip cookie"
//     }, 
//     {
    
//         "id": "orio", 
//         "imageUrl": "img/cookies/orio.jpg", 
//         "name": "orio", 
//         "snippet": "A delicous Orio cookie"
//     },
//       {
//         "age": 1, 
//         "id": "motorola-xoom", 
//         "imageUrl": "img/phones/motorola-xoom.0.jpg", 
//         "name": "MOTOROLA XOOM\u2122", 
//         "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
//     }, 
// ];
// });

