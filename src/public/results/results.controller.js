(function () {
"use strict";

angular.module('public')
.controller('ResultController', ResultController);

ResultController.$inject = ['menuCategories'];
function ResultController(menuCategories) {
  var $ctrl = this;
  $ctrl.matchResults = menuCategories;
}


})();
