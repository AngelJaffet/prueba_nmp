'use strict';

module.exports = {
	myFunction: function(arr1, arr2){
		const merge = Float64Array.from([...arr1, ...arr2]);
		const sorted = merge.sort();
		const unique = [...new Set(sorted)];
		return unique;
	}
};