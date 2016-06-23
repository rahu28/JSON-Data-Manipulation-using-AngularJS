var myApp;
myApp = angular.module("myApp", [])
    .controller("MyController",["$scope", "$http", function ($scope, $http) {
        $http.get("json/data.json").success(function(data){
            $scope.writers = data;
        });
    }]);

function loaded (el) {
    el.classList.add("loaded");

}