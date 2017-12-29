function sortFun(ev) {
	var listToSort;
	if(ev.target.id == "sortBooks") {
		listToSort = $('custom-row').slice(0,10);
		if(ev.target.value == "ascending") { 
			listToSort.sort(sortAsc);
			$.each(listToSort, function(index, row) {
				$(row).insertBefore($('#tableContainer').find('custom-row').get(index));
			});
		} else if(ev.target.value == "descending") {
			listToSort.sort(sortDesc);
			$.each(listToSort, function(index, row) {
				$(row).insertBefore($('#tableContainer').find('custom-row').get(index));
			});
		}
	} else if(ev.target.id == "sortHouses") {
		listToSort = $('custom-row').slice(10,20);
		if(ev.target.value == "ascending") { 
			listToSort.sort(sortAsc);
			$.each(listToSort, function(index, row) {
				$(row).insertBefore($('#tableContainer').find('custom-row').get(index+10));
			});
		} else if(ev.target.value == "descending") {
			listToSort.sort(sortDesc);
			$.each(listToSort, function(index, row) {
				$(row).insertBefore($('#tableContainer').find('custom-row').get(index+10));
			});
		}
	} else if(ev.target.id == "sortChars") {
		listToSort = $('custom-row').slice(20,30);
		if(ev.target.value == "ascending") { 
			listToSort.sort(sortAsc);
			$.each(listToSort, function(index, row) {
				$(row).insertBefore($('#tableContainer').find('custom-row').get(index+20));
			});
		} else if(ev.target.value == "descending") {
			listToSort.sort(sortDesc);
			$.each(listToSort, function(index, row) {
				$(row).insertBefore($('#tableContainer').find('custom-row').get(index+20));
			});
		}
	}
}

function sortAsc(a, b) {
	return ($(a).find(".jumbotron").text().trim() > $(b).find(".jumbotron").text().trim());
}

function sortDesc(a, b) {
	return ($(a).find(".jumbotron").text().trim() < $(b).find(".jumbotron").text().trim());
}