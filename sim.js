const WORK_RETIRE = require("./models/work_retire")
const INTEREST_W_CONTRIBUTION = require("./models/interest_w_contribution")

class Simulation {
    constructor() {}

    static getSupportedModelNames(){
        return [
            WORK_RETIRE.Model.name,
            INTEREST_W_CONTRIBUTION.Model.name
        ]
    }

    setModelName(modelName) {
        if(!Simulation.getSupportedModelNames().includes(modelName)){
            throw new Error("Unsupported model name: " + modelName)
        }
        this.modelName = modelName
    }

    setYears(years) {
        this.years = years
    }

    setInterestRate(interestRate) {
        this.interestRate = interestRate
    }

    setAnnualContribution(annualContribution) {
        this.annualContribution = annualContribution
    }

    setCurrentSavings(currentSavings) {
        this.currentSavings = currentSavings
    }

    setCurrentAge(currentAge) {
        this.currentAge = currentAge
    }

    setRetirementAge(retirementAge) {
        this.retirementAge = retirementAge
    }

    validateModelInputs() {
        switch(this.modelName) {
            case "InterestWithContribution":
              if (isNaN(this.years) || isNaN(this.currentSavings) || isNaN(this.interestRate) || isNaN(this.annualContribution)) {
                throw new Error('Missing one or more values for InterestWithContribution model (year, currentSavings, interestRate, annualContribution');
              }
              break;
            default:
                throw new Error("Cannot simulate. Unknown model set.");
          }
    }

    simulate() {
        switch(this.modelName) {
            case "InterestWithContribution":
              let model = new INTEREST_W_CONTRIBUTION.Model(this.years, this.currentSavings, this.interestRate, this.annualContribution)
              model.simulate()
              console.log("Model plot points:", model.getPlotPoints())
              break;
            default:
                throw new Error('Cannot simulate. Unknown model set.');
          }
    }

}


module.exports = { Simulation };