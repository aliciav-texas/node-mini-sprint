$(document).ready(function () {

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
    $.get('http://localhost:3000/quote', (quote) => {

      // console.log('qoute', quote);
      $('#quote').text(quote);

    })

  }

  function addQuote(quote) {


    //onclick
    $.post('http://localhost:3000/post', quote, (data) => {

      // console.log(data) ===> test quote
      $('#response').text(`Here is your most recently added submission! "${data}"! This quote will now be added to our random quote generator!`);

    });


    //YOUR CODE HERE, Add a POST request

  }
});
