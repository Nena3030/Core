//Implementiranje na osnoven web server koj opsluzuva staticka datoteka

var fs = require ('fs');
var http = require ('http');
var url = require ('url');
var ROOT_DIR = "html/";

http.createServer (function(req,res){
    var urlObj = url.parse (req.url, true, false); //so parse go pretvarame objektot url vo string
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) {
        if (err){
            res.writeHead (404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead (200);
        res.end (data);
    })
}). listen(8080);


