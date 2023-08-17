const sumAll = function (numOne, numTwo) {
	if (typeof numOne !== "number" || typeof numTwo !== "number") return "ERROR";
	if (numOne < 0 || numTwo < 0) return "ERROR";
	if (numOne > numTwo) {
		const temp = numOne;
		numOne = numTwo;
		numTwo = temp;
	}

	let newSum = [];
	for (let i = 0; i < numTwo; i++) {
		newSum[i] = numOne + i;
	}
	return newSum.reduce((acc, curr) => acc + curr);
};

// Do not edit below this line
module.exports = sumAll;
