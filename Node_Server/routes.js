const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    //console.log(req.url, req.method, req.headers);
    if(url === '/'){
        res.write("<html>");
        res.write("<h1>Hello World from root</h1>");
        res.write("<form action='/messages' method='POST'><input type='text' name='message'><button type='submit'>send</button></form>");
        res.write("</html>");
        return res.end();
    }
    if(url === '/messages' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
         return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split("=")[1];
            fs.writeFile("message.txt", message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();  
            });
            //console.log(message);
        });
        
          
    }
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<h1>Hello World from Page</h1>");
    res.write("</html>");
    res.end();
};

//exports can be done by

// 1. module.exports = requestHandler;

// 2. creating object
module.exports = {
    handler: requestHandler,
    someText : "Hello From Route JS FILE"
}

// 3. module.exports.handler = requestHandler;
// module.exports.someText = "Hello From Route JS FILE";

// 4. shortcut
// exports.handler = requestHandler;
// exports.someText = "Hello From Route JS FILE";
