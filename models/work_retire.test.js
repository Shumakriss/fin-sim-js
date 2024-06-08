const MODEL =  require('./work_retire')

test('Growth through retirement model is accurate', () => {
    let model = new MODEL.Model(35, 65, 30000, 10000, 0.07, 1200)
    model.simulate()
    results = model.getPlotPoints()
    expect(typeof results).toBe('object');
    expect(results[0]).toBe(10000);
    expect(results[3]).toBe(16108.310000000001);
    expect(results.length).toBe(39)
    expect(results[38] < 30000).toBe(true)
    expect(results[38]).toBe(17760.098162769267)
    expect(model.getRetirementYears()).toBe(8)
    expect(model.getDepletionAge()).toBe(73)
});