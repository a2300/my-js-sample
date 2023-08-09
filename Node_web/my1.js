const http = require('http');

const requestListener = (req, res) => {
  console.dir(req, { depth: 0 });
  
  // console.log(req.headers);
  res.end("Hello Node!\n");
}

// const server = http.createServer(requestListener);

const server = http.createServer();
server.on('request', requestListener);

server.listen(4242, () => {
  console.log("Server is running ...");
});

/**
 * Install nodemon globally
 * C:\dev\My2\my-js\Node_web>npm i -g nodemon
 * 
 * Run with nodemon
 * C:\dev\My2\my-js\Node_web>nodmon my1.js
 */