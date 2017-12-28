app.service('fetchDataService', function($http) {

    var main = this;
    this.url = " https://anapioficeandfire.com/api/";

    this.booksData = function() {
    	return $http({
    		method: "GET",
    		url: main.url + 'books'
    	})
    }
    this.housesData = function() {
    	return $http({
    		method: "GET",
    		url: main.url + 'houses'
    	})
    }
    this.charactersData = function() {
    	return $http({
    		method: "GET",
    		url: main.url + 'characters'
    	})
    }
});