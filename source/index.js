const http = require("http")
const os = require("os")

const server = http.createServer((req, resp) => {
  resp.end(os.hostname())
})

server.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n")
})

server.listen(3000)
