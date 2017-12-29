app.directive("customRow", function() {
    return {
        restrict: "E", // restrict element
        templateUrl: "views/customRowPage.html",
        // scope: {
        //             data.mainLink: '='                  
        //         },
        controller: function($scope) {
            if($scope.data.authors) {
                $scope.data.subLink = $scope.data.isbn;
                $scope.data.mainLink = $scope.data.name;
            }
            if($scope.data.region) {
                $scope.data.subLink = $scope.data.name;
                $scope.data.mainLink = $scope.data.name;
            }
            if($scope.data.gender) {
                $scope.data.subLink = $scope.data.aliases[0];
                $scope.data.mainLink = $scope.data.aliases[0];
            }
        }
    };
});


