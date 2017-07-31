import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const AppW = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0;
  padding: 0;
`;

const StartCard = styled.div`
  font-family: 'Permanent Marker', sans-serif;
  display: flex;
  height: 100vh;
  font-size: 6em;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;

  & > h1 {
    margin: 0;
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <AppW className="App">
        <StartCard>
          <h1>Jared Mohney</h1>
        </StartCard>
        <StartCard>
          <h1>HOW ARE YOU</h1>
        </StartCard>  
      </AppW>
    );
  }
}

export default App;
