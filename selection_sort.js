const arr = [ 3, 5, 7, 89, 78, -5, 4, 9, 8, 44, 66 ];
let count = 0;

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let indexMin = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[indexMin]) {
				indexMin = j;
			}
			count += 1;
		}
		let tmp = array[i];
		array[i] = array[indexMin];
		array[indexMin] = tmp;
	}
	return array;
}
console.log(selectionSort(arr));
console.log('count = ', count);
