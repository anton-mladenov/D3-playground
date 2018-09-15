const http = require("http")
const fs = require("fs")

const hostname = "127.0.0.1"
const port = 3001
let time = `${new Date().getHours()}:${new Date().getMinutes()}`

const server = http.createServer((req, res) => {

	if (req.url === "/styles.css") {
		res.writeHead(200, { "Content-Type": "text/css" })
		let cssFile = fs.readFileSync("./styles.css", { encoding: 'utf8' })
		res.end(cssFile)
	}

	if (req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" })
		let htmlFile = fs.readFileSync("./index.html", { encoding: 'utf8' })
		res.end(htmlFile)
	}

	if (req.url === "/main.js") {
		res.writeHead(200, { "Content-Type": "text/javascript" })
		let jsFile = fs.readFileSync("./main.js", { encoding: 'utf8' })
		res.end(jsFile)
	}

	res.end()
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/ in ${time}`)
})