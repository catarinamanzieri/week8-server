const express = require('express') 

const comidas = {
    pratosFavoritos: [
    {
        nome: "Batata frita",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        imagem: "img/Batata-frita.jpg"
    },
    {
        nome: "Macarronada",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        imagem: "img/macarronada.jpg"
    },
    {
        nome: "Paçoquita",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        imagem: "https://http2.mlstatic.com/pacoquita-de-amendoim-caixa-com-20g-cada-pacoca-premium-D_NQ_NP_917716-MLB27126685393_042018-F.jpg"
    },
    {
        nome: "Batata frita",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        imagem: "img/Batata-frita.jpg"
    },
    {
        nome: "Macarronada",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        imagem: "img/macarronada.jpg"
    },
    {
        nome: "Paçoquita",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        imagem: "https://http2.mlstatic.com/pacoquita-de-amendoim-caixa-com-20g-cada-pacoca-premium-D_NQ_NP_917716-MLB27126685393_042018-F.jpg"
    },
    {
        nome: "Batata frita",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        imagem: "img/Batata-frita.jpg"
    },
    {
        nome: "Macarronada",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        imagem: "img/macarronada.jpg"
    },
    {
        nome: "Paçoquita",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        imagem: "https://http2.mlstatic.com/pacoquita-de-amendoim-caixa-com-20g-cada-pacoca-premium-D_NQ_NP_917716-MLB27126685393_042018-F.jpg"
    },
    {
        nome: "Batata frita",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        imagem: "img/Batata-frita.jpg"
    }]
}

const servidor = express()

servidor.get("/comidas", (request, response) => {
    response.send("Inhaí")
})

// const servidor = http.createServer(function (request, response){
//     if (request.url === '/'){
//         response.end("Inhaii mundo lindjo")
//     } else if (request.url === '/comidas'){
//         // response.end("Resposta diferente")
//         if (request.method === 'GET'){
//             response.writeHead(200, {
//                 "Content-Type": "application/json",
//                 "Access-Control-Allow-Origin": "*"
//             })
//             response.write(JSON.stringify(comidas))
//             // response.end("<h1>O que tocar no coração do GET</h1>")
//             response.end()
//         } else if(request.method === 'POST'){
//             response.writeHead(201, {
//                 "Content-Type": "text/html;charset=utf-8"
//             })
//             response.end("<h1>O que tocar no coração do POST</h1>")
//         }
//     }
// })

servidor.listen(3000)
console.log("Servidor rodando na porta 3000")