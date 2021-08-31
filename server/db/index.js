//require mysql and set to a const
const mysql = require('mysql');
//create a connection variable
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hacker!!',
  database: 'movieQuotes'
});
//create a connection on mysql
//pass in login information to an obj
//host: localhost user: password: database:

//invoke connect on connection
connection.connect();

//make functions to handle queryRequests

const getQuotesFromDB = (callback) => {
  let sqlString = 'SELECT * FROM randomMovieQuotes;'
  connection.query(sqlString, (err, data) => {
    if (err) {
      callback(err, null);
      console.log('Did not pass in the value with the string ')
    } else {
      callback(null, data);
      console.log('successful sql syntax!')
    }
  })
}


const postQuoteToDB = (incomingQuote, callback) => {

  console.log(`the incoming quote from the server ${incomingQuote}`)

  let sqlString = `insert into randomMovieQuotes (quote) values ("${incomingQuote}");`;

  connection.query(sqlString, (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })

}


module.exports = {
  getQuotesFromDB,
  postQuoteToDB
}