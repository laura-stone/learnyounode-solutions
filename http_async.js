var http = require('http');
var bl = require('bl');
var array = [process.argv[2], process.argv[3], process.argv[4]];
var results = {};
var count = 0;

function printResults() {
    if (count == (process.argv.length - 2)) {
        for (var key in results) {
            var value = results[key];
                console.log(value);
        }
    }
}


array.forEach(function(url, i) {
    http.get(url, function(response) {
            response.pipe(bl(function(err, data) {
                if (err)
                    return console.error(err);
                results[i] = data.toString();
                count++;
                printResults();
            }));
    });
});