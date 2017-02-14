var VLogin = angular.module('myapp',[]);

VLogin.controller('TestCtrl', ['$scope',function($scope) {

    $scope.clicked = function(){   
    	window.location = "page1.html";
//        $location.path('page1.html');
    }

}]);

// VLogin.controller('SigninButton', ['$scope',function($scope)]){
// 	var f = document.forms["form-Signin"].elements;
// 	document.getElementById('button-Signin').disabled = true;
//     var cansubmit = true;
// 	for (var i = 0; i < f.length; i++) {
//         if (f[i].value.length == 0) cansubmit = false;
//     }
//     if (cansubmit) {
//         document.getElementById('button-Signin').disabled = false;
//     }
//     else {
//     	document.getElementById('button-Signin').disabled = true;
//     }

// }]);