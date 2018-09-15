const http = require("http")
const fs = require("fs")

const hostname = "127.0.0.1"
const port = 3001
let time = `${new Date().getHours()}:${new Date().getMinutes()}`

fs.readFile("./index.html", (err, html) => {
	if (err) {
		throw err
	}
	const server = http.createServer((req, res) => {
		res.writeHead(200, { "Content-Type": "text/html" })
		res.write(html)
		res.end()
	})
	server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/ in ${time}`)
	})
})



