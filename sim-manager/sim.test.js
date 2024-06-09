const SIM =  require('./sim')

test('Validating model inputs before setting model throws', () => {
    let simulation = new SIM.Simulation()
    expect(simulation.validateModelInputs).toThrow()
});

test('Setting an unknown model throws', () => {
    let simulation = new SIM.Simulation()
    expect(() => {
        simulation.validateModelInputs('octopus');
      }).toThrow()
});

test('Configurable simulator performs validation of model inputs', () => {
    let simulation = new SIM.Simulation()
    simulation.model = "InterestWithContribution"
    expect(simulation.validateModelInputs).toThrow()
});

test('Configurable simulator invokes model', () => {
    let simulation = new SIM.Simulation()
    simulation.setModelName("InterestWithContribution")
    simulation.setYears(3)
    simulation.setInterestRate(0.07)
    simulation.setCurrentSavings(10000)
    simulation.setAnnualContribution(1200)
    simulation.validateModelInputs()
    simulation.simulate()
});