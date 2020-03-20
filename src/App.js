import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import characters from "./characters.json";


// Shuffler
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Class component
class App extends Component {
  // Setting states
  state = {
    characters,
    score: 0,
    topScore: 0,
    status: "Click a Character to start!",
    clicked: []
  };

  // Shuffle handler
  handleShuffle = () => {
    let shuffleCharacters = shuffle(characters);
    this.setState({ characters: shuffleCharacters });
  };

  // Score tracker
  handlePoints = () => {
    const updateScore = this.state.score + 1;
    this.setState({
      score: updateScore,
      status: "Sugoi!" //(Wow!)
    });

    if (updateScore > this.state.topScore) {
      this.setState({ topScore: updateScore });
    }

    this.handleShuffle();
  }

  // Reset
  handleNewGame = () => {
    this.setState({
      clicked: [],
      score: 0,
      topScore: this.state.topScore
    });
    this.handleShuffle();
  };

  // Testing the click listener
  // clickEvent = () => {
  //   console.log('This is a click event');
  // }

  // Click handler
  handleClicked = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handlePoints();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.setState({ status: "Baka!"}) //(Idiot!)
      this.handleNewGame();
    }
  };
  // Setting JSX attributes and maps over characters.json & displays
  // each array item in a Card component
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
            handlePoints={this.handlePoints}
            handleNewGame={this.handleNewGame}
          />
        ))}
      </Wrapper>
    </>
  }
}

export default App;
