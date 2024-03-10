const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/signup' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const userData = JSON.parse(body);
            saveUserData(userData);
            res.end('User signed up successfully!');
        });
    } else {
        res.end('Invalid request');
    }
});

function saveUserData(userData) {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        let users = JSON.parse(data);
        users.users.push(userData);
        fs.writeFile('users.json', JSON.stringify(users), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('User data saved successfully');
        });
    });
}

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
