var fs = require('fs');
var path = process.argv[2];
var filter = process.argv[3];
var pat = RegExp('\\.' + filter + '$');

fs.readdir(path, function(err, directoryContents) {
        directoryContents.forEach(testFile);
});

function testFile(file) {
        if (pat.test(file)) {
                console.log(file);
          }
}