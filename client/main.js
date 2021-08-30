// const axios = require('axios');

$(document).ready(function () {
  // const axios = require('axios');

  // get a quote from the server when the page loads and add it to the dom
  getQuote();

  // when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });




  function getQuote() {
    //YOUR CODE HERE, Add a GET request
    axios.get('http://localhost:3000/quote')
      .then((data) => {
        // console.log(`the data from an axios request to express serve ${data}`)
        // console.log(data.data);
        $('#quote').text(data.data);
      })
      .catch((error) => {
        console.log('oops there was an error', error);
      })
  }

  function addQuote(quote) {
    console.log('qoute', quote);
    axios.post('http://localhost:3000/post', {
      newQuote: quote
    })
      .then((submittedQuote) => {
        console.log(`the data from an axios request to express serve ${submittedQuote.data}`)
        $('#response').text(`Here is your most recently added submission! "${submittedQuote.data}"! This quote will now be added to our random quote generator!`);
      })
      .catch((error) => {
        console.log('oops there was an error', error);
      })
    //YOUR CODE HERE, Add a POST request

  }
});
