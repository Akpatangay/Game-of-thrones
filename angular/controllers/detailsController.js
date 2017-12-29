app.controller("detailsController", ['$http', '$routeParams', 'fetchDataService', function($http, $routeParams, fetchDataService) {
    var main = this;
    this.key = $routeParams.key;
    this.value = $routeParams.value;
    this.data = [];
    this.store = {};
    this.books = [];

    if (main.key == 'books') {
        fetchDataService.booksData()
            .then(function(response) {
                main.data = response.data;
                for (var i in main.data) {
                    if (main.value == main.data[i].isbn) {
                        main.store = main.data[i];
                    }
                    console.log(main.store);
                }
            }, function(error) {
                alert("An error occured! Check the console.");
                console.log(error);
            });
    } else if (main.key == 'houses') {
        fetchDataService.housesData()
            .then(function(response) {
                main.data = response.data;
                for (var i in main.data) {
                    if (main.value == main.data[i].name) {
                        main.store = main.data[i];
                        var heirUrl = main.data[i].heir;
                        var currentLordUrl = main.data[i].currentLord;
                        var overlordUrl = main.data[i].overlord;

                        if (heirUrl)
                            main.getLordsInHouses(heirUrl, 'heir');
                        if (currentLordUrl)
                            main.getLordsInHouses(currentLordUrl, 'currentLord');
                        if (overlordUrl)
                            main.getLordsInHouses(overlordUrl, 'overlord');
                    }
                }
            }, function(error) {
                alert("An error occured! Check the console.");
                console.log(error);
            });
    } else if (main.key == 'characters') {
        fetchDataService.charactersData()
            .then(function(response) {
                main.data = response.data;
                for (var i in main.data) {
                    if (main.value == main.data[i].aliases[0]) {
                        main.store = main.data[i];
                        for (var j in main.data[i].books) {
                            main.charInBooksUrl = main.data[i].books[j];
                            main.getcharInBooks(j);
                        }
                    }
                }
            }, function(error) {
                alert("An error occured! Check the console.");
                console.log(error);
            });
    }

    main.getcharInBooks = function(b) { debugger;
        $http({
            method: 'GET',
            url: main.charInBooksUrl
        }).then(function(response) {
            main.books[b] = response.data.name;
        }, function(error) {
            alert("An error occured! Check the console.");
            console.log(error);
        });
    };

    main.getLordsInHouses = function(URL, id) {
        $http({
            method: 'GET',
            url: URL
        }).then(function(response) {
            console.log(response.data);
            if (id == 'heir') {
                main.heir = response.data.name;
            }
            if (id == 'overlord') {
                main.overlord = response.data.name;
            }
            if (id == 'currentLord') {
                main.currentLord = response.data.name;
            }
        }, function(error) {
            alert("An error occured! Check the console.");
        });
    };

}]);