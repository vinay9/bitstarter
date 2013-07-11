var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('/index.html', function (err, data) {
  if (err) throw err;
var buffer = new Buffer(100);
response.send(buffer.toString('utf8',0,data);  
console.log(data);
});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
