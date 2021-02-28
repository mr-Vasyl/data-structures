// array
const array = [ 1, 4, 5, 78, 8, 10, 2, 34 ];
let count = 0;
function linearSearch(array, item) {
	for (let i = 0; i < array.length; i++) {
		count += 1;
		if (array[i] === item) return i;
	}
	return null;
}
console.log('index = ', linearSearch(array, 10), 'count = ', count);
