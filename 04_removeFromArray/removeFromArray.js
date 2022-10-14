var removeFromArray = function(...args) {
  const array = args[0]
  return array.filter(val => !args.includes(val))
}


// const removeFromArray = function (arr, ...args) {
// 	let position = -1;
// 	for (const arg of args) {
// 		for (const item of arr) {
// 			position++;
// 			if (arg === item) arr.splice(position, 1);
// 		}
// 		position = -1;
// 	}

// 	let result = arr;
// 	return result;
// };

// Do not edit below this line
module.exports = removeFromArray;
