'use strict';

angular.module("hamburgerHelper",[])
  .constant('hamburgerHelperCssClasses',{
    hamburgerHelper: 'hamburger-helper',
    transformed: 'hamburger-transformed'
  })
  .factory('hamburgerHelper', ['$timeout', function($timeout){

    var state = {
      isArrow: false
    }

    return {
      state: state,
      isArrow: function(){
        return state.isArrow;
      }
    }
  }])
  .directive("ngHamburgerHelper", ['hamburgerHelperCssClasses',function(hamburgerHelperCssClasses){
      return {
          restrict: "E",
          scope: {
            arrowWhen: '=arrowWhen'
          },
          transclude: true,
          template: '<span class="' + hamburgerHelperCssClasses.hamburgerHelper + '" ng-class="{\'' + hamburgerHelperCssClasses.transformed + '\': arrowWhen}"><span></span></span>',
          replace: true,
          controller: ['$scope', 'hamburgerHelper', '$element',function($scope, hamburgerHelper, $element){
            $scope.hamburgerHelper = hamburgerHelper;
          }]
      }
  }]);

