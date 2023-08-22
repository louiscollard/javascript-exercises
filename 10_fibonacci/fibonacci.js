const fibonacci = function (count) {
	if (count < 0) return "OOPS";
	if (count === 0) return 0;

	let fibonacci = [0, 1];
	for (let i = 2; i <= count; i++) {
		fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
	}

	let response = fibonacci.slice(-1);
	return parseInt(response.join(""));
};

// Do not edit below this line
module.exports = fibonacci;
