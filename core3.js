//Hyper Text Transfer Protocol ili Http
//So ovoj modul se kreira server koj slusa na odreden port od serverot i ovozmozuva komunikacija pomegu klientite i serverot
//Za da se kreira http server potrebna e metodata http.createServer (function (req,res)) request, response
//Otkako ke go kreirame serverot moze da zapocne "slusanjeto", taka sto go povikuvame metodot listen na objektot server
//server.listen(port) - port na koj se slusa, primer 8080
//API e softver koj im nudi na klienti da pristapat do odredeni informacii isprakajki http request
//site mobilni aplikacii se tip na klienti, browser e klient


const http = require ('http');
const server = http.createServer (function(req,res) {
    if (req.url==='/') {
        res.write ('http://user:pass@host.com')
    }
});
server.listen (8080);
console.log ('Slusame na port 8080');