const http = require('http');
const url = require('url')

http.createServer((request, response) => {

    console.log(request.url)
    const parsedUrl = url.parse(request.url, true)
    const pathName = parsedUrl.pathname
    const queryParams = parsedUrl.query
    console.log(queryParams)

    if (pathName === '/favicon.ico') {
        response.writeHead(404)
        response.end()
        return
    }

    if (request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
        response.write('A soma é:' + (Number(queryParams.num) + Number(queryParams.num1)))
        response.end();
    }

}).listen(3000)
