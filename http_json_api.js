var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
    var request = url.parse(req.url, true);
    if (request.pathname == '/api/parsetime') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var dateum = new Date(request.query.iso);
        var dateObj = {
            'hour' : dateum.getHours(),
            'minute' : dateum.getMinutes(),
            'second' : dateum.getSeconds()
        };
        res.end(JSON.stringify(dateObj));
    }
    else if (request.pathname == '/api/unixtime') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var dateum = new Date(request.query.iso);
        var unixObj = {
            'unixtime' : dateum.getTime()
        };
        res.end(JSON.stringify(unixObj));
    }
    else {
        res.writeHead(404);
        res.end();
      }
});
server.listen(Number(port));