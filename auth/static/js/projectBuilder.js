angular.module('projectBuilder', []).
controller('projBuildCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.description = "";
    $scope.title = "";
    $scope.submitProject = function() {
      $http.post("/project", {
        title: $scope.title,
        description: $scope.description
      }).then(function(response) {
        window.location = "/project/" + response.data.projectID;
      });
    }
  }]);
