module.exports = function getZerosCount(number, base) {
	// your implementation
	let primeMultipliers = {};
	for (let i = 2; i <= base; i++) {
		while (true) {
			if (base % i === 0) {
				base = base / i;
				primeMultipliers[i] = primeMultipliers[i] === undefined ? 1 : primeMultipliers[i] + 1;
			} else {
				break;
			}
		}
	}

	let array = [];
	for (const key in primeMultipliers) {
		let result = 0;
		for (let i = +key; i <= number; i = i * +key) {
			result += Math.floor(number / i);
		}
		array.push(Math.floor(result / primeMultipliers[key]));
	}
	return array.sort((a, b) => a - b)[0];
}