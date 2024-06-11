const fs = require('fs');

function handleUsers(req, res) {
    const url = req.url;

    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Hello</title><head>');
        res.write('<body>')
        res.write('<h1>Hello there!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="newUser"><button type="submit">Create user</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users</title><head>');
        res.write('<h2>User list</h2>')
        res.write('<ul><li>Pomu</li><li>Elira</li><li>Finana</li></ul>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
          req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const newUser = parsedBody.split('=')[1];
            fs.writeFile('newUser.txt', newUser, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
}

module.exports.handler = handleUsers;