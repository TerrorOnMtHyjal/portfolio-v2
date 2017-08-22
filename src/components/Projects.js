import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';
import ProjectCard from './ProjectCard';
import { data } from '../lib/data';

const ProjectsW = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  // background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  background: #8ee4af;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -25%;
    height: 10em;
    width: 150%;
    transform-origin: 100% 0;
    transform: rotateZ(2deg);
    background: #8ee4af;
    -webkit-backface-visibility: hidden;
  }
`;

/*
#05386B dark blue 
#379683 muted dark green 
#5cdb95 bright green 
#8ee4af muted bright green 
#edf5e1 off white
*/

const InnerW = styled.div`
  position: relative;   
  width: 80%;
  margin-top: 10em;
`;

const EditorsW = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: white;
  padding: 1em 0;
  margin-top: 10em;
  padding: 5em;
`;

class Projects extends Component {

  generateProjects(data){
    return data.map((data, index) => {
      return <ProjectCard key={ `project${index}` } data={data}/>
    });
  }

  render() {
    return (
      <ProjectsW>
        <InnerW>
          <Editor code="const projects = [" theme={'titleEditor'} />
            <EditorsW>
              {this.generateProjects(data)}
            </EditorsW>
          <Editor code="];" theme={'titleEditor'} />
        </InnerW>
      </ProjectsW>
    );
  }
}

export default Projects;