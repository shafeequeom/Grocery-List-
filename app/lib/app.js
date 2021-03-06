var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html'
  })
  .when('/list', {
    templateUrl: 'views/list.html',
    controller:'AppController'
  })
  .when('/add', {
    templateUrl: 'views/add.html',
    controller:'AppController'
  }).otherwise({
    redirectTo: '/home'
  });
}])


myApp.controller('AppController', ['$scope', function($scope) {

  $scope.removeItem = function (item) {
    var removedItem = $scope.items.indexOf(item);
    $scope.items.splice(removedItem, 1);
  };

  $scope.addItem = function () {
    $scope.items.push(
      {
        name: $scope.newitem.name,
        price: $scope.newitem.rate,
        type: $scope.newitem.type,
        color:$scope.newitem.color,
        available: true
      }
    );
  };


  $scope.items = [
    {
      name: "Tomato",
      price: 50,
      type: "Vegitable",
      color:"red",
      available: true
    },
    {
      name: "Apple",
      price: 160,
      type: "Fruits",
      color:"red",
      available: true
    },
    {
      name: "Onion",
      price: 30,
      type: "Vegitable",
      color:"violet",
      available: true
    },
    {
      name: "Pototo",
      price: 48,
      type: "Vegitable",
      color:"Goldenrod",
      available: true
    }

  ];

}]);
