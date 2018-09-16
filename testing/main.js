
// // create a Line chart 
// const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01';

// /**
//  * Loading data from API when DOM Content has been loaded'.
//  */
// document.addEventListener("DOMContentLoaded", function (event) {
// 	fetch(api)
// 		.then(function (response) { return response.json(); })
// 		.then(function (data) {
// 			var parsedData = parseData(data);
// 			drawChart(parsedData);
// 		})
// 		.catch(function (err) { console.log(err); })
// });

// /**
//  * Parse data into key-value pairs
//  * @param {object} data Object containing historical data of BPI
//  */
// function parseData(data) {
// 	var arr = [];
// 	for (var i in data.bpi) {
// 		arr.push({
// 			date: new Date(i), //date
// 			value: +data.bpi[i] //convert string to number
// 		});
// 	}
// 	return arr;
// }

// /**
//  * Creates a chart using D3
//  * @param {object} data Object containing historical data of BPI
//  */
// function drawChart(data) {
// 	var svgWidth = 600, svgHeight = 400;
// 	var margin = { top: 20, right: 20, bottom: 30, left: 50 };
// 	var width = svgWidth - margin.left - margin.right;
// 	var height = svgHeight - margin.top - margin.bottom;

// 	var svg = d3.select('svg')
// 		.attr("width", svgWidth)
// 		.attr("height", svgHeight);

// 	var g = svg.append("g")
// 		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// 	var x = d3.scaleTime()
// 		.rangeRound([0, width]);

// 	var y = d3.scaleLinear()
// 		.rangeRound([height, 0]);

// 	var line = d3.line()
// 		.x(function (d) { return x(d.date) })
// 		.y(function (d) { return y(d.value) })
// 	x.domain(d3.extent(data, function (d) { return d.date }));
// 	y.domain(d3.extent(data, function (d) { return d.value }));

// 	g.append("g")
// 		.attr("transform", "translate(0," + height + ")")
// 		.call(d3.axisBottom(x))
// 		.select(".domain")
// 		.remove();

// 	g.append("g")
// 		.call(d3.axisLeft(y))
// 		.append("text")
// 		.attr("fill", "#000")
// 		.attr("transform", "rotate(-90)")
// 		.attr("y", 6)
// 		.attr("dy", "0.71em")
// 		.attr("text-anchor", "end")
// 		.text("Price ($)");

// 	g.append("path")
// 		.datum(data)
// 		.attr("fill", "none")
// 		.attr("stroke", "steelblue")
// 		.attr("stroke-linejoin", "round")
// 		.attr("stroke-linecap", "round")
// 		.attr("stroke-width", 1.5)
// 		.attr("d", line);
// }


// // creating pie chart 
// var data = [
// 	{ "platform": "Android", "percentage": 40.11 },
// 	{ "platform": "Windows", "percentage": 36.69 },
// 	{ "platform": "iOS", "percentage": 13.06 }
// ];

// var svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight) / 2;
// var svg = d3.select('svg')
// 	.attr("width", svgWidth)
// 	.attr("height", svgHeight);

// //Create group element to hold pie chart    
// var g = svg.append("g")
// 	.attr("transform", "translate(" + radius + "," + radius + ")");

// var color = d3.scaleOrdinal(d3.schemeCategory10);

// var pie = d3.pie().value(function (d) {
// 	return d.percentage;
// });

// var path = d3.arc()
// 	.outerRadius(radius)
// 	.innerRadius(0);

// var arc = g.selectAll("arc")
// 	.data(pie(data))
// 	.enter()
// 	.append("g");

// arc.append("path")
// 	.attr("d", path)
// 	.attr("fill", function (d) { return color(d.data.percentage); });

// var label = d3.arc()
// 	.outerRadius(radius)
// 	.innerRadius(0);

// arc.append("text")
// 	.attr("transform", function (d) {
// 		return "translate(" + label.centroid(d) + ")";
// 	})
// 	.attr("text-anchor", "middle")
// 	.text(function (d) { return d.data.platform + ":" + d.data.percentage + "%"; });

// // drawing lines, rectangles and circles inside SVG element
// let svgHeight = 550
// let svgWidth = 850

// let svg = d3.select("body")
// 	.append("svg")
// 	.attr("height", svgHeight)
// 	.attr("width", svgWidth)
// 	.attr("class", "styleOrange")

// let line = svg.append("line")
// 	.attr("x1", 20)
// 	.attr("y1", 550)
// 	.attr("x2", 425)
// 	.attr("y2", 275)
// 	.attr("stroke", "black")
// 	.attr("stroke-width", 5)

// let rectangle = svg.append("rect")
// 	.attr("x", 200)
// 	.attr("y", 100)
// 	.attr("width", 600)
// 	.attr("height", 100)
// 	.attr("fill", "green")

// let circle = svg.append("circle")
// 	.attr("cx", 400)
// 	.attr("cy", 300)
// 	.attr("r", 150)
// 	.attr("fill", "black")

// // first linear graph example
// let dataset = [90, 20, 70, 160, 35, 230, 190, 70, 50, 30, 100, 40, 60, 95, 70, 140]

// let svgHeight = 350
// let svgWidth = 500

// let svg = d3.select("svg")
// 	.attr("width", svgWidth)
// 	.attr("height", svgHeight)

// let xScale = d3.scaleLinear()
// 	.domain([0, d3.max(dataset)])
// 	.range([0, svgWidth])

// let yScale = d3.scaleLinear()
// 	.domain([0, d3.max(dataset)])
// 	.range([svgHeight, 0])

// let x_axis = d3.axisBottom()
// 	.scale(xScale)

// let y_axis = d3.axisLeft()
// 	.scale(yScale)

// svg.append("g")
// 	.attr("transform", "translate(50, 10)")
// 	.call(y_axis)

// let xAxisTranslate = svgHeight - 20

// svg.append("g")
// 	.attr("transform", `translate(50, ${xAxisTranslate})`)
// 	.call(x_axis)

// // this example takes the dataset given and for each data element creates a P element
// // then for each element it prints the element in descending order
// // then it applies a style to the P element
// let dataset = [1, 3, 4, 6, 7, 9]

// d3.select("body")
// 	.data(dataset)
// 	.enter()
// 	.append("p")
// 	.text((d) => {
// 		return "The data behind this point is: " + d
// 	})
// 	.style("color", "purple")


// // first example graph
// let dataset = [90, 20, 70, 160, 35, 190, 70, 50, 30, 100, 230, 40, 60, 95, 70, 140]
// // let dataset = [1, 3, 5, 6, 7, 10, 4, 5, 12]

// let svgHeight = 350
// let svgWidth = 550
// // let barPadding = 5
// // let barWidth = (svgWidth / dataset.length)

// let svg = d3.select("svg")
// 	.attr("height", svgHeight)
// 	.attr("width", svgWidth)
// 	.attr("class", "bar-chart")

// let yScale = d3.scaleLinear()
// 	.domain([0, d3.max(dataset)])
// 	.range([0, svgHeight])

// let barChart = svg.selectAll("rect")
// 	.data(dataset)
// 	.enter()
// 	.append("rect")
// 	.attr("y", (d) => {
// 		return svgHeight - yScale(d)
// 	})
// 	.attr("height", (d) => {
// 		return yScale(d)
// 	})
// 	.attr("width", barWidth - barPadding)
// 	.attr("transform", (d, i) => {
// 		let translate = [barWidth * i, 0]
// 		return `translate(` + translate + `)`
// 	})

// let chartText = svg.selectAll("text")
// 	.data(dataset)
// 	.enter()
// 	.append("text")
// 	.text((d) => {
// 		return "€" + d
// 	})
// 	.attr("y", (d, i) => {
// 		return svgHeight - d - 2
// 	})
// 	.attr("x", (d, i) => {
// 		return barWidth * i
// 	})
// 	.attr("fill", "yellow")








