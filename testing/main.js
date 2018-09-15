
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


// first example graph
// let dataset = [90, 20, 70, 160, 35, 190, 70, 50, 30, 100, 230, 40, 60, 95, 70, 140]
let dataset = [1, 3, 5, 6, 7, 10, 4, 5, 12]

let svgHeight = 350
let svgWidth = 550
let barPadding = 5
let barWidth = (svgWidth / dataset.length)

let svg = d3.select("svg")
	.attr("height", svgHeight)
	.attr("width", svgWidth)
	.attr("class", "bar-chart")

let yScale = d3.scaleLinear()
	.domain([0, d3.max(dataset)])
	.range([0, svgHeight])

let barChart = svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("y", (d) => {
		return svgHeight - yScale(d)
	})
	.attr("height", (d) => {
		return yScale(d)
	})
	.attr("width", barWidth - barPadding)
	.attr("transform", (d, i) => {
		let translate = [barWidth * i, 0]
		return `translate(` + translate + `)`
	})

let chartText = svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text((d) => {
		return "€" + d
	})
	.attr("y", (d, i) => {
		return svgHeight - d - 2
	})
	.attr("x", (d, i) => {
		return barWidth * i
	})
	.attr("fill", "yellow")








