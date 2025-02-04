const http = require('http');

//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
};

const port = 3000;

// TODO: Fill with strings of your favorite quotes :)
const quotes = [
  'That will do Pig, that will do',
  'What do tigers dream of when they take a little snooze?',
  'I am vengence! I am the night! I am Batman!',
  'I am McLovin',
  'Billyyyy'
];


//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const handleRequest = function (req, res) {
  console.log(`Endpoint: ${req.url} Method: ${req.method}`);

  //test method
  // if (req.method === 'GET') {
  //   console.log('request', req);

  // }

  // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
  if (req.url == '/') {
    console.log('redirecting');
    res.writeHead(301, { ...headers, Location: `http://localhost:${port}/quote` }) //redirect to quote
    res.end();
  };

  // TODO: GET ONE
  if ((req.url == '/quote/' || req.url == '/quote') && req.method == "GET") {
    console.log('You hit the GET request on endpoint /quote or /quote/')
    res.writeHead(200, headers);
    res.write(quotes[getRandomInt(0, 4)])
    res.end();
  }
  // TODO: POST/CREATE
  else if ((req.url == 'FILL ME IN' || req.url == 'FILL ME IN') && req.method == "POST") {
    //YOUR CODE HERE
  }

  //CATCH ALL ROUTE
  else {
    res.writeHead(404, headers);
    res.end('Page not found');

  }
}

const server = http.createServer(handleRequest);
server.listen(port);

console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);
