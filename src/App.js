import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import IntroCard from './components/IntroCard';
import TaglineCard from './components/TaglineCard';
import ProjectCard from './components/ProjectCard';
import ProtoPageCard from './components/ProtoPageCard';

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

        <ProjectCard img={require('./images/protopage-min.png')}>
          <ProtoPageCard />
        </ProjectCard>

        <ProjectCard img={require('./images/pogtracker-min-2.png')}>
          
        </ProjectCard>

        <ProjectCard img={require('./images/rocket-garage-min.png')}>
          
        </ProjectCard>
      </AppW>
    );
  }
}

export default App;
