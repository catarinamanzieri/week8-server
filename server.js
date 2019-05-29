const http = require('http') 

const servidor = http.createServer(function (request, response){
	if (request.url === '/'){
        response.end("Inhaii mundo lindjo")
    } else if (request.url === '/comidas'){
        // response.end("Resposta diferente")
        if (request.method === 'GET'){
            response.writeHead(200, {
                "Content-Type": "text/html;charset=utf-8"
            })
            response.end("<h1>O que tocar no coração do GET</h1>")
        } else if(request.method === 'POST'){
            response.writeHead(201, {
                "Content-Type": "text/html;charset=utf-8"
            })
            response.end("<h1>O que tocar no coração do POST</h1>")
        }
    }
})

servidor.listen(3000)
console.log("Servidor rodando na porta 3000")