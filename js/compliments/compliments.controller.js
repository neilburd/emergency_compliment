`use strict`;

(function(){
  var app = angular.module("compliments");
  app.controller("complimentsController", ComplimentsController);

  function complimentsController(){
    var vm = this;
    var randomIndex = Math.floor(Math.random() * data.length);
    
    
    vm.compliments =
    [
      "Good effort!",
      "What a fine sweater!",
      "I appreciate all of your opinions.",
    ];
    
    vm.compliment = compliments[randomIndex];


  }

}());
