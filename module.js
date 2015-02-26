var fs = require('fs');
 
module.exports = function(path, ext, callback) {
        var pat = RegExp('\\.' + ext + '$');
        fs.readdir(path, function(err, directoryContents) {
                if (err) {
                        callback(err);
                }
                else {
                  result = [];
                  directoryContents.forEach(function(file) {
                    if  (pat.test(file)) {
                      result.push(file);
                    }
                  });
                  callback(null, result);
                }
        });
};