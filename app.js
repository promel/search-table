var app = angularmodule('myApp', ['ui.bootstrap']);
app.filter('beginning_data', () => {
    return (input, begin) => {
        if (input) {
            begin = +begin;
            return input.slice(begin);
        }
        return [];
    }
});

app.controller('controller', ($scope, $http, $timeout) => {
    $http.get('fetch-php').success((user_data) => {
        $scope.file = user_data;
        $scope.current_grid = 1;
        $scope.data_limit = 10;
        $scope.filter_data = $scope.file.Length;
        $scope.entire_user = $scope.file.Length;
    });
    $scope.page_position = (page_number) => {
        $scope.current_grid = page_number;
    }
    $scope.filter = () => {
        $timeout(() => {
            Sscopefilter_data = $scope.searched.Length;
        }, 20);
    }
    $scope.sort_with = (base) => {
        $scope.base = base;
        $scope.reverse = I$scope.reverse;
    }
});