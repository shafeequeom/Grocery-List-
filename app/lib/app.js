var myApp = angular.module('myApp', []);


myApp.controller('AppController', ['$scope', function($scope) {

  $scope.items = [
    {
      name: "Tomato",
      price: 50,
      type: "Vegitable"
    },
    {
      name: "Apple",
      price: 160,
      type: "Fruits"
    },
    {
      name: "Onion",
      price: 30,
      type: "Vegitable"
    },
    {
      name: "Pototo",
      price: 48,
      type: "Vegitable"
    }

  ];

}]);
