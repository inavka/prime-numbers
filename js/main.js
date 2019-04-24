function getPrimeNumbers() {
	let firstNumber = prompt('Your first number', 0);
	let secondNumber = prompt('Your second number', 0);

	let min = (firstNumber <= secondNumber) ? firstNumber : secondNumber;
	let max = (firstNumber >= secondNumber) ? firstNumber : secondNumber;

	nextPrime:
	for (var i = min; i < max; i++) {
		for (var a = 2; a < i; a++) {
			if (i % a == 0) continue nextPrime;
				}
			alert (i);
			}
}
