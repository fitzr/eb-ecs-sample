var http = require('http')
var server = http.createServer()

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1>Hello my first application!</h1>')
    res.end();
})

server.listen(80)
console.log('server listening...')
