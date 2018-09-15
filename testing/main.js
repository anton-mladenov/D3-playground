
d3.select("h2").style("color", "red")

let dataset = [90, 20, 70, 160, 35, 190, 70, 50, 30, 100, 230, 40, 60, 95, 70, 140]

let svgHeight = 350
let svgWidth = 500
let barPadding = 5
let barWidth = (svgWidth / dataset.length)

let svg = d3.select("svg")
	.attr("height", svgHeight)
	.attr("width", svgWidth)
	.attr("class", "bar-chart")

let barChart = svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("y", (d) => {
		return svgHeight - d
	})
	.attr("height", (d) => {
		return d
	})
	.attr("width", barWidth - barPadding)
	.attr("transform", (d, i) => {
		let translate = [barWidth * i, 0]
		return `translate(` + translate + `)`
	})

