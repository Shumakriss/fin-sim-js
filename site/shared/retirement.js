function retirementBalances(principal, rate, years, withdrawal, inflation, socialSecurity) {
	let balances = [principal];
	let balance = principal;

	console.log("Principal: ", principal, 
		", Growth Rate: ", rate, 
		", Balances: ", balances, 
		", Withdrawal: ", withdrawal, 
		", Inflation Rate: ", inflation, 
		", Annual Social Security", socialSecurity)
	
	for (let i = 1; i<years.length; i++) {
		balance = (balance - (withdrawal - socialSecurity)) * (1 + rate);
		withdrawal = withdrawal * (1 + inflation);
		balances.push(balance);
	}

	return balances
}