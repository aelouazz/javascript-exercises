const ftoc = function (x) {
	let res = (x - 32) * (5 / 9);
	return parseFloat(res.toFixed(1));
};

const ctof = function (x) {
	let res = x * (9 / 5) + 32;
	return parseFloat(res.toFixed(1));
};

// Do not edit below this line
module.exports = {
	ftoc,
	ctof,
};
