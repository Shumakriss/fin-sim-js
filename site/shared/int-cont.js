function intContBalances(principal, rate, years, contribution) {
	let balances = [principal];
	let balance = principal;

	console.log("Principal: ", principal, ", Rate: ", rate, ", Balances: ", balances)
	
	for (let i = 1; i<years.length; i++) {
		balance = (balance + contribution) * (1 + rate)
		balances.push(balance)
	}

	return balances
}