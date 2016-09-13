"use strict";

app.controller("FlowerView", function($scope, FlowerFactory) {
    let FlowerView = true;
    $scope.flowerArray = [];
    FlowerFactory.getFlowers()
        .then(function(flowerArray) {
          console.log("flowerArray", flowerArray);
            $scope.flowerArray = flowerArray;
            $scope.holidayFlowers = flowerArray
            $scope.holidayFlowers = flowerArray
        });
});
