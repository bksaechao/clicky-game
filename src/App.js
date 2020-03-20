import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json"

class App extends Component {

  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
        <Title>Character List</Title>
        {this.state.characters.map(character => (
          <Card
            removeFriend={this.removeFriend}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
