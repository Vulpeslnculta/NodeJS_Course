const http = require('http');
const fs = require('fs');

const server = http.createServer(function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('users.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    if (url === '/create-user') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Nikodems local server</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="Please enter your username"><button type="submit">sign in</button></form></body>');
        res.write('</html>');
        return res.end();

    }
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greetings Champ</title></head>');
        res.write('<body><h1>Hello from Node User DB! </h1></body>');
        res.write('</html>');
    } {
        if (url === '/users') {
            fs.readFile('users.txt', 'utf8', function(err, data) {
                if (err) throw err;
                console.log(data);
            });

        }
    }

});
server.listen(3000);