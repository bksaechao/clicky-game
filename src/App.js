import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import characters from "./characters.json";


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};


class App extends Component {

  state = {
    characters,
    score: 0,
    topScore: 0,
    status: "",
    clicked: []
  };

  handleShuffle = () => {
    let shuffleCharacters = shuffle(characters);
    this.setState({ characters: shuffleCharacters });
  };

  handleNewGame = () => {
    this.setState({
      clicked: [],
      score: 0,
      topScore: this.state.topScore
    });
    this.handleShuffle();
  };

  // clickEvent = () => {
  //   console.log('This is a click event');
  // }

  handleClicked = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      // this.handlePoints();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleNewGame();
    }
  };

  render() {
    return <>
      <Navbar
        status={this.state.status}
        score={this.state.score}
        topScore={this.state.topScore}
      />
      <Jumbotron />
      <Wrapper>
        {this.state.characters.map(character => (
          <Card
            // clickEvent={this.clickEvent}
            handleShuffle={this.handleShuffle}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            handleClicked={this.handleClicked}
            // handlePoints={this.handlePoints}
            handleNewGame={this.handleNewGame}
          />
        ))}
      </Wrapper>
    </>
  }
}

export default App;
