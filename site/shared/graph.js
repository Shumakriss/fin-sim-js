function initPlot(graph, title, years, balances) {
    let data = [{ x: years, y: balances }];
	var layout = {
		title: title,
		width: 968,
		height: 500,
		xaxis: { dtick: 5 }
		};
	Plotly.newPlot( graph, data, layout);
    return data
}

function getDefaultYears() {
    let years = [];
    for (let i = 2024; i<2024+100; i++) {
	    years.push(i);
    }
    return years
}