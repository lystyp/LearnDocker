PATH = "/data/text"

var http = require("http"); 
var url = require("url"); 
var fs = require("fs");

function onRequest(req, res) {
  if (req.url != "/favicon.ico") { 
    var parseUrl = url.parse(req.url);
    var pathname = parseUrl.pathname;
		if (pathname == '/write') {
			var query = parseUrl.query;
			console.log(" pathname >>> " + pathname + "\n query >>> " + query);
			fs.writeFile(PATH, query.toString(), function (err) {
				if (err)
						console.log(err);
				else
						console.log('Write operation complete.');
			});
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end("Write OK : " + query);
		} else if (pathname == '/read') {
			var query = parseUrl.query;
			console.log(" pathname >>> " + pathname);
			fs.readFile(PATH, function (err, data) {
				if (err) {
					res.writeHead(200, {"Content-Type": "text/plain"});
					res.end("read ERROR : " + err.toString());
				} else {
					console.log(" pathname >>> " + pathname + "\n read file >>> " + data.toString());
					res.writeHead(200, {"Content-Type": "text/plain"});
					res.end("read : " + data.toString());
				}
			});

		} else {
			console.log(" pathname >>> " + pathname + "\n query >>> " + query);
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end("Home page~~");
		}
  }
}

http.createServer(onRequest).listen(3000);
console.log("Server has started to listen at port: 3000.");