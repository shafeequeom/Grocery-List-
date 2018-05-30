var myApp = angular.module('myApp', []);


myApp.controller('AppController', ['$scope', function($scope) {

  $scope.removeItem = function (item) {
    var removedItem = $scope.items.indexOf(item);
    $scope.items.splice(removedItem, 1);
  }

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
