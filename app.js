var app = angular.module('sortingApp', []);

app.controller('mainCtrl', function($scope, $http) {
    $scope.sortData = 'id';
    $scope.sortInReverse = false;
    $scope.dataExist = true;

$scope.loadData = function () {
  $http.get('http://jsonplaceholder.typicode.com/posts')
  .then(onDataSuccess , onDataError);
};

var onDataSuccess = function (res) {
  $scope.dataExist = true;
  $scope.events = res.data;
 };

var onDataError = function (res) {
  $scope.errorMsg = res.status + ': Data ' + res.statusText;
  $scope.dataExist = false;
};

$scope.loadData();

});
