`use strict`;

(function(){
  var app = angular.module("compliments");
  app.controller("complimentsController", ComplimentsController);

  function ComplimentsController(){
    var self = this;
    let rand = Math.floor(Math.random()/compliments.length);
    self.compliments =
    [
      "Good effort!",
      "What a fine sweater!",
      "I appreciate all of your opinions.",
    ];

  }

}());
