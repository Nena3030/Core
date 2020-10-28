//Implementacija na klient koj praka GET request na server za da ja prevzeme sodrzinata na fajlot

const http = require ('http');
const options = {
    hostname: 'localhost',
    port: '8080',
    path: '/http.html'
};

function handleResponse (response){
    const serverData = '';
    response.on ('data', function (chunk) {
        serverData += chunk;
    })


response.on ('end', function (){
    console.log (serverData);
})
}
http.request (options,function(response){
    handleResponse (response);
}).end();