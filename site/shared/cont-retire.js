function contToRetireBalances(principal, 
								years, 
								savingsGrowthRate, 
								retirementGrowthRate,
								contribution,
								withdrawal,
								retirementYear,
								inflation,
								socialSecurity) {
	let balances = [principal];
	let balance = principal;

	console.log("Principal: ", principal, 
				", Years: ", years,
				", Balances: ", balances, 
				", Withdrawal: ", withdrawal, 
				", Savings Growth Rate: ", savingsGrowthRate,
				", Retirement Growth Rate: ", retirementGrowthRate,
				", Contribution: ", contribution,
				", Withdrawal: ", withdrawal,
				", Inflation Rate: ", inflation,
				", Annual Social Security: ", socialSecurity
			)
	
	for (let i = 1; i<retirementYear+1; i++) {
		balance = (balance + contribution) * (1 + savingsGrowthRate)
		balances.push(balance)
	}

	console.log("Calculating retirement balances. Savings: ", balance, ", years remaining: ", (years - retirementYear))

	for (let i = 1; i<(years.length - retirementYear); i++) {
		balance = (balance - (withdrawal - socialSecurity)) * (1 + retirementGrowthRate)
		withdrawal = withdrawal * (1 + inflation);
		console.log("Balance: ", balance, ", Inf adj withdrawal: ", withdrawal)
		balances.push(balance)
	}

	return balances
}