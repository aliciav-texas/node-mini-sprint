import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: ['That will do Pig, that will do',
        'What do tigers dream of when they take a little snooze?',
        'I am vengence! I am the night! I am Batman!',
        'I am McLovin',
        'Billyyyy'],
      submittedQuote: '',
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getQuote() {
    //add a random intFunction
    // console.log(this.getRandomInt(0, this.state.quotes.length))
    console.log('get quote was invoked')
    let randomIndex = this.getRandomInt(0, this.state.quotes.length);
    let randomQuote = this.state.quotes[randomIndex];
    return randomQuote
    // return this.state.quotes[0];
  }


  render() {
    return (
      <>
        <h1> Random Movie Quote Generator !! </h1>
        <h2 id="quote">{this.getQuote()}</h2>
        <form>
          <input type="text" />
          <button id="submit">Submit</button>
          <p id="response"></p>
        </form>

      </>
    );
  }
}

export default App;
