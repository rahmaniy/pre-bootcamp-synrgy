const http = require("http")
const fs = require("fs")

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type" : "text/html"})
    fs.readFile("./index.html", null, (error, data) => {
        if(error) {
            response.writeHead(404)
            response.write("file not found")
        }else {
            response.write(data)
        }
        response.end()
    })
}

http.createServer(onRequest).listen(8000)