import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import IntroCard from './components/IntroCard';
import TaglineCard from './components/TaglineCard';
import ProjectCard from './components/ProjectCard';
import ProjectDetails from './components/ProjectDetails';
import ProtoPageDetails from './components/ProtoPageDetails';
import PogTrackerDetails from './components/PogTrackerDetails';
import projectData from './data/projectsData';

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

    console.log(projectData.protoPage);

    return (
      <AppW className="App">
        <IntroCard />
        <TaglineCard/>

        <ProjectCard img={require('./images/protopage-cropped.png')} right>
          <ProjectDetails
            title={projectData.protoPage.title}
            features={projectData.protoPage.features}
            description={projectData.protoPage.description}
            right
          />
        </ProjectCard>

        <ProjectCard img={require('./images/pogtracker-min.png')}>
          <ProjectDetails
            title={projectData.pogTracker.title}
            features={projectData.pogTracker.features}
            description={projectData.pogTracker.description}
          />
        </ProjectCard>

        <ProjectCard img={require('./images/rocket-cropped.png')} right>
          <ProjectDetails
            title={projectData.rocketGarage.title}
            features={projectData.rocketGarage.features}
            description={projectData.rocketGarage.description}
          />
        </ProjectCard>
      </AppW>
    );
  }
}

export default App;
