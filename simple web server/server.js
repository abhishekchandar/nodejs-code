var http = require('http')
var request = require('request')

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello! \n')
})

request('http://www.google.com', function (error, message, body) {
  console.log(body)
})
server.listen(7000)
