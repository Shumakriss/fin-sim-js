function initPlot(graph, title, years, balances) {
    let data = [{ x: years, y: balances }];
	var layout = {
		title: title,
		logo: true,
		modebar: true,
		autosize: true,
		xaxis: { dtick: 5 },
		yaxis: {
			autorangeoptions: {
				minallowed: 0
			}
		}
		};
	Plotly.newPlot( graph, data, layout);
    return data
}

function getDefaultYears() {
    let years = [];
    for (let i = 2024; i<2024+50; i++) {
	    years.push(i);
    }
    return years
}