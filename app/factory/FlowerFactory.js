"use strict";

app.factory("FlowerFactory", function($q, $http) {
    let getFlowers = () => {
        let flowerArray = [];
        return $q((resolve, reject) => {
            $http.get("https://flower-power-angular.firebaseio.com/arrangements.json")
                .success((data) => {
                  console.log(data);
                  flowerArray = data;
                  // flowerArray = convertResultsToArray(data.price);
                    resolve(flowerArray);
                })
                .error( (error) => {
                  reject(error);
                });
        });
    };
    let convertResultsToArray = (object) => {
      let resultsArray =[];
      let keysArray = Object.keys(object);
      keysArray.forEach( (key) => {
        object[key] = key;
        resultsArray.push(object[key]);
      });
      return resultsArray;
    };

    return {getFlowers};
});
