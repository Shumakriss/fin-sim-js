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

function getYears(numberOfYears, startYear) {
    let years = [];
	let currentYear = startYear;
    for (let i = currentYear; i<currentYear+numberOfYears; i++) {
	    years.push(i);
    }
    return years
}