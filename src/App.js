import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import IntroCard from './components/IntroCard';
import TaglineCard from './components/TaglineCard';

const AppW = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 1px;
  perspective-origin: 0 0;
  font-size: 3rem;
  font-family: 'Roboto Slab', serif;
`;

class App extends Component {

  render() {
    return (
      <AppW className="App">
        <IntroCard />
        <TaglineCard/>
      </AppW>
    );
  }
}

export default App;
