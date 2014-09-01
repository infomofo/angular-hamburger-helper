'use strict';

angular.module("hamburgerHelper",[])
  .constant('hamburgerHelperCssClasses',{
    hamburgerHelper: 'hamburger-helper',
    transformed: 'hamburger-transformed'
  })
  .directive("ngHamburgerHelper", ['hamburgerHelperCssClasses',function(hamburgerHelperCssClasses){
      return {
          restrict: "E",
          scope: {
            arrowWhen: '=arrowWhen'
          },
          transclude: true,
          template: '<span class="' + hamburgerHelperCssClasses.hamburgerHelper + '" ng-class="{\'' + hamburgerHelperCssClasses.transformed + '\': arrowWhen}"><span></span></span>',
          replace: true,
          controller: ['$scope', '$element',function($scope, $element){
          }]
      }
  }]);

