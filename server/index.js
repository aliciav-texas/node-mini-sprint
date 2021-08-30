// const http = require('http');
const express = require('express')
const app = express();
const port = 3000;
app.use(express.json());


//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
};

//middleware
app.use(function (req, res, next) {
  res.set(headers);
  next();
});

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


//Express

app.get('/quote', (req, res) => {
  // console.log('get post hit ')
  let randomQuote = quotes[getRandomInt(0, quotes.length)];
  res.status(200).send(randomQuote);
});

//   // TODO: GET ONE
//   if ((req.url == '/quote/' || req.url == '/quote') && req.method == "GET") {
//     // console.log('You hit the GET request on endpoint /quote or /quote/')
//     res.writeHead(200, headers);
//     res.write(quotes[getRandomInt(0, quotes.length)])
//     res.end();
//   }



// app.all('/', (req, res) => {
//   res.status(301);
//   res.redirect('/quote');
// })

app.post('/post', (req, res) => {
  // console.log('post request hit:', typeof req.body.newQuote);
  quotes.push(req.body.newQuote);
  res.status(200).send(req.body.newQuote);
})

// //Raw Node
// const handleRequest = function (req, res) {
//   console.log(`Endpoint: ${req.url} Method: ${req.method}`);

//   // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
//   if (req.url == '/') {
//     console.log('redirecting');
//     res.writeHead(301, { ...headers, Location: `http://localhost:${port}/quote` }) //redirect to quote
//     res.end();
//   };


//   // TODO: POST/CREATE
//   else if ((req.url == '/post' || req.url == '/post') && req.method == "POST") {

//     let chunks = [];
//     console.log('req', req.on('data', (chunk) => {
//       // console.log('chunk', chunk) ===> <Buffer 73 64 66>
//       chunks += chunk
//     }).on('end', () => {
//       // console.log('chunks',  chunks) ===> test quote
//       quotes.push(chunks);
//       console.log(`list of random quotes ${quotes}`);

//       res.writeHead(201, headers);
//       res.write(chunks);
//       res.end();
//     })
//     );
//     // console.log('you hit the POST request on endpoint /post within index.js');
//     //YOUR CODE HERE
//   }

//   //CATCH ALL ROUTE
//   else {
//     res.writeHead(404, headers);
//     res.end('Page not found');
//   }
// }

//Express



//Raw Node
// const server = http.createServer(handleRequest);
// server.listen(port);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})

// console.log('Server is running in the terminal!');
// console.log(`Listening on http://localhost:${port}`);
