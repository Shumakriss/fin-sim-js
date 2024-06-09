const MODEL =  require('./interest_w_contribution')

test('Simple interest growth is accurate', () => {
    let model = new MODEL.Model(3, 10000, 0.07, 1200)
    model.simulate()
    results = model.getPlotPoints()
    expect(typeof results).toBe('object');
    expect(results[0]).toBe(10000);
    expect(results[3]).toBe(16108.310000000001);
});
