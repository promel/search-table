var app = angular.module('myApp', ['ui.bootstrap']);
app.filter('beginning_data', function() {
    return function (input, begin) {
        if (input) {
            begin = +begin;
            return input.slice(begin);
        }
        return [];
    }
});

app.controller('controller', function ($scope, $http, $timeout)  {
    $http.get('https://www.hansafrique.co.za/Home/GetallCat').success(function (user_data){
        $scope.file = user_data.result;
        $scope.current_grid = 1;
        $scope.data_limit = 10;
        $scope.filter_data = $scope.file.length;
        $scope.entire_user = $scope.file.length;
    });
    $scope.page_position = function(page_number) {
        console.log(page_number);
        $scope.current_grid = page_number;
    }
    $scope.filter = function (){
        $timeout(function() {
            Sscopefilter_data = $scope.searched.length;
        }, 20);
    }
});