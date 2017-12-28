app.controller('mainController', ['fetchDataService', function(fetchDataService) {
    var main = this;
    this.entireData = [];
    this.books = [];
    this.houses = [];
    this.characters = [];

    this.getBooksData = function() {
        fetchDataService.booksData()
            .then(function success(response) {
                console.log(response);
                main.books = response.data;
                for (var i in main.books) {
                    main.entireData.push(main.books[i])
                }
            }, function error(response) {
                alert("some error occurred. Check the console.");
                console.log(response);
            });
    }();

    this.getHousesData = function() {
        fetchDataService.housesData()
            .then(function success(response) {
                console.log(response);
                main.houses = response.data;
                for (var i in main.houses) {
                    main.entireData.push(main.houses[i])
                }
            }, function error(response) {
                alert("some error occurred. Check the console.");
                console.log(response);
            });
    }();

    this.getCharactersData = function() {
        fetchDataService.charactersData()
            .then(function success(response) {
                console.log(response);
                main.characters = response.data;
                for (var i in main.characters) {
                    main.entireData.push(main.characters[i])
                }
            }, function error(response) {
                alert("some error occurred. Check the console.");
                console.log(response);
            });
    }();
}]);