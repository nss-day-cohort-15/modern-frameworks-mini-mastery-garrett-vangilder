"use strict";

app.controller("FlowerView", function($scope, FlowerFactory) {
    $scope.flowerArray = [];
    FlowerFactory.getFlowers()
        .then(function(flowerArray) {
          console.log("flowerArray", flowerArray);
            $scope.flowerArray = flowerArray;
        });
});
