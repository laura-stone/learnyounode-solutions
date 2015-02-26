var http = require('http');
var url = process.argv[2];

http.get(url, function(req) {
  var result = "";
  req.setEncoding('utf8');
  req.on("data", function(data) {
        result += data;
  });
  req.on("end", function() {
        console.log(result.length);
        console.log(result);
  });
  req.on("error", function(err) {
       console.log("Got error: " + err.message);
  });
});