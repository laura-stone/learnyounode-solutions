var module = require('./module');
var path = process.argv[2];
 
module(path, process.argv[3], function(err, files) {
        files.forEach(function(value) {
                console.log(value);
        });
});