(function () {
"use strict";

angular.module('public')
.controller('ResultController', ResultController);

ResultController.$inject = ['results'];
function ResultController(results) {
  var $ctrl = this;
  $ctrl.matchResults = results;
}


})();
