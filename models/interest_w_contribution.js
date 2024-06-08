class Model {

    static name = "InterestWithContribution"

    constructor(years, 
                currentSavings,
                interestRate, 
                annualContribution
    ) {
        this.years = years
        this.currentSavings = currentSavings
        this.interestRate = interestRate
        this.annualContribution = annualContribution
        this.plotPoints = [this.currentSavings]
    }

    simulate() {
        let totalSavings = this.currentSavings
        for (let year = 0; year < this.years; year++) {
            totalSavings = totalSavings * (1 + this.interestRate) + this.annualContribution
            this.plotPoints.push(totalSavings)
        }
    }

    getPlotPoints() {
        return this.plotPoints
    }

}


module.exports = { Model };