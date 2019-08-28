// Require dependencies
var http = require("http");
var fs = require("fs");
var path = require('path');

// Set our port to 8080
var PORT = process.env.PORT || 8080;

var server = http.createServer(handleRequest);

function sendFile(filename, res) {
  fs.readFile(path.join(__dirname, filename), function(err, data) {
    if (err) throw err;
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(data);
  });
}

function handleRequest(req, res) {
  switch (req.url) {
    case "/food":
      sendFile('food.html', res);
      break;
    case "/movies":
      sendFile("movies.html", res);
      break;
    case "/frameworks":
      sendFile("frameworks.html", res);
      break;
    default:
      sendFile("index.html", res);
      break;
  }
}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
