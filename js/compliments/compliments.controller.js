`use strict`;

(function(){
  var app = angular.module("compliments");
  app.controller("complimentsController", ComplimentsController);

  function complimentsController(){
    var vm = this;
    var randomIndex = Math.floor(Math.random() * data.length);
    vm.data = data[randomIndex];
  }

}());
