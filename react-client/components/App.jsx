import React from 'react';
import axios from 'axios'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      submittedQuote: 'Submit your favorite movie quote!',
      numOfQuotes: 0
    }
    this.getQuote = this.getQuote.bind(this),
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    //set a length on state
    this.getQuote();
    console.log(this.state.quotes)
    // make a get request
    // this.setState({
    //   numOfQuotes: this.state.quotes.length
    // })
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getQuote() {
    axios.get('http://localhost:3000/quote')
      .then((quotes) => {
        let quotesFromServer = quotes.data
        console.log(`result of GET request on App: ${quotesFromServer}`);

        this.setState({
          quotes: quotesFromServer,
          numOfQuotes: quotesFromServer.length
        })

        // this.setState({
        //   numOfQuotes: this.state.quotes.length,

        // })

        console.log('within the get request, after setState, the number of Quotes is:' + this.state.numOfQuotes);

        console.log(`within the get request, after setState, the quotes array is${this.state.quotes}`)


      })
      .catch((error) => {
        console.log('oops there was an error', error);
      })
  }

  handleSubmit() {

    alert(`Your movied quote "${this.state.submittedQuote}" was submitted! It will now be addeed to the Random Generator`)
    event.preventDefault();
  }


  render() {
    return (
      <>
        <h1> Random Movie Quote Generator !! </h1>
        <h2 id="quote">{this.state.quotes[this.getRandomInt(0, this.state.numOfQuotes)]}</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <button id="submit">Submit</button>
          <p id="response"> {this.state.submittedQuote}</p>
        </form>

      </>
    );
  }
}

export default App;
