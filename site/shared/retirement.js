function retirementBalances(principal, rate, years, withdrawal, inflation) {
	let balances = [principal];
	let balance = principal;

	console.log("Principal: ", principal, 
		", Growth Rate: ", rate, 
		", Balances: ", balances, 
		", Withdrawal: ", withdrawal, 
		", Inflation Rate: ", inflation)
	
	for (let i = 1; i<years.length; i++) {
		balance = (balance - withdrawal) * (1 + rate);
		withdrawal = withdrawal * (1 + inflation);
		balances.push(balance);
	}

	return balances
}