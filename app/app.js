"use strict";

var app = angular.module("FlowerApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
  when("/", {
    controller: ""
  }).
  when("/flowers",{
    templateUrl: "partials/flowers.html",
    controller: "FlowerView"
  }).
  otherwise("/")
})
