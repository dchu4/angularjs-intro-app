(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl",function($scope){
    $scope.message = "Hey There!!!";

    $scope.isPositive = function(review){
      
    };

    window.scope = $scope;
  });

}());