import React from 'react';
import axios from 'axios'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: ['That will do Pig, that will do',
        'What do tigers dream of when they take a little snooze?',
        'I am vengence! I am the night! I am Batman!',
        'I am McLovin',
        'Billyyyy'],
      submittedQuote: 'Submit your favorite movie quote!',
    }
    this.getQuote = this.getQuote.bind(this),
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getQuote() {
    axios.get('http://localhost:3000/quote')
      .then((data) => {
        // console.log(`the data from an axios request to express serve ${data}`)
        // console.log(data.data);
        console.log(`result of GET request on App.jsx${data.data}`);
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
        <h2 id="quote">{this.getQuote()}</h2>
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
