
// // drawing lines inside SVG element
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








