// const http = require('http');
const express = require('express')
const app = express();
const port = 3000;
const mysqldb = require('./db')



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
// const quotes = [
//   'That will do Pig, that will do',
//   'What do tigers dream of when they take a little snooze?',
//   'I am vengence! I am the night! I am Batman!',
//   'I am McLovin',
//   'Billyyyy'
// ];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
//Express

// TODO: GET ONE
app.get('/quote', (req, res) => {
  mysqldb.getQuotesFromDB((err, results) => {
    if (err) {
      console.log('you hit an error trying to hit your database');
      res.status(200).send('there was an error')
    } else {
      console.log(`here are your results ${results}`);
      res.status(200).send(results);
    }
  });
  // console.log('get post hit ')
});


// TODO: POST/CREATE
app.post('/post', (req, res) => {
  console.log('post request hit:', req.body.newQuote);

  let clientSubmission = req.body.newQuote
  //connect to DB and send a post
  mysqldb.postQuoteToDB(clientSubmission, (err, results) => {
    if (err) {
      console.log('you hit an error on ./server/index.js');
      res.status(400).send('There was an error -- from server/index.js');
    } else {
      res.status(200).send('succesfully posted to the DB');
    }
  });
});

//   //CATCH ALL ROUTE
//   Covered in Express

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
