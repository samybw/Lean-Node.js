let http = require('http')
let fs = require('fs');
let url = require('url')



let server = http.createServer()

server.on('request', (request ,response ) => {
    response.writeHead(200);

    let query = url.parse(request.url,true).query;

    let name = query.name === undefined ? "Anonyme" : query.name

    fs.readFile('index.html', 'utf8', (err,data) => {
    if (err){
        response.writeHead(404)
        response.end("Ce fichier n'existe pas !")
    }
     else{
        response.writeHead(200);
 

     }
     data = data.replace('{{name}}', name )  
   
      response.end(data);
    })
    
})

module.exports = app
