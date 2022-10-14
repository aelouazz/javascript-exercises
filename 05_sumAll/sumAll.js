const sumstartll = function (start, end) {
	if (
		typeof start != "number" ||
		typeof end != "number" ||
		start < 0 ||
		end < 0
	)
		return "ERROR";
	let i = start < end ? start : end;
	let j = start < end ? end : start;
	let sum = 0;

	while (i <= j) {
		sum += i;
		i++;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumstartll;
