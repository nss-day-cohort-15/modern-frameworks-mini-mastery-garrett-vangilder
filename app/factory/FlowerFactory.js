"use strict";

app.factory("FlowerFactory", function($q, $http) {
    let getFlowers = () => {
        let flowerArray = [];
        return $q((resolve, reject) => {
            $http.get("https://flower-power-angular.firebaseio.com/arrangements.json")
                .success((data) => {
                  flowerArray = data;
                    resolve(flowerArray);
                })
                .error( (error) => {
                  reject(error);
                });
        });
    };
    return {getFlowers};
});
