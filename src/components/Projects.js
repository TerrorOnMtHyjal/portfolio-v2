import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';
import ProjectCard from './ProjectCard';
import { data } from '../lib/data';

const ProjectsW = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  // background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  background: #3feee6;
`;

/*
#fc445 red 
#3feee6 bright teal 
#55bcc9 muted teal 
#97caef muted dark blue 
#cafafe muted light blue
#1a1a1d dark gray
*/

const InnerW = styled.div`
  width: 80%;
  margin-top: 10em;
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
          {this.generateProjects(data)}
          <Editor code="];" theme={'titleEditor'} />
        </InnerW>
      </ProjectsW>
    );
  }
}

export default Projects;