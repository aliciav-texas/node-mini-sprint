// const http = require('http');
const express = require('express')
const app = express();
const port = 3000;



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

app.use(express.json());

//serve the static file
app.use(express.static('../react-client/dist'));
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

// TODO: GET ONE
app.get('/quote', (req, res) => {
  // console.log('get post hit ')
  // let arrayOfQuotes = quotes
  // let randomQuote = quotes[getRandomInt(0, quotes.length)];
  res.status(200).send(quotes);
});


// TODO: POST/CREATE
app.post('/post', (req, res) => {
  // console.log('post request hit:', typeof req.body.newQuote);
  quotes.push(req.body.newQuote);
  res.status(200).send(req.body.newQuote);
});

// app.all('/', (req, res) => {
//   res.status(301).redirect('/quote');
// })



//   //CATCH ALL ROUTE
//   Covered in Express


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// console.log('Server is running in the terminal!');
// console.log(`Listening on http://localhost:${port}`);
