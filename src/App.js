import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters
  };

  render() {
    return <>
      <Navbar />
      <Jumbotron />
      <Wrapper>
        {this.state.characters.map(character => (
          <Card
            // removeFriend={this.removeFriend}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    </>
  }
}

export default App;
