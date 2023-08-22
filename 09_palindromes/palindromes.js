const palindromes = function (str) {
	let punctuation = /[\.,?!]/g;
	let convertToStr = str.toString().toLowerCase();

	let filterReverseStr = convertToStr
		.replace(punctuation, "")
		.split(" ")
		.join("");
	let reverseStr = filterReverseStr.split("").reverse().join("");

	if (reverseStr === filterReverseStr) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
