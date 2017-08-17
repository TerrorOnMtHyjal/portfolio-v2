import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';

const ProjectCardW = styled.div`
  display: flex;
`;

class ProjectCard extends Component {
  render() {
    return (
      <ProjectCardW>
        <img src="" alt=""/>
        <Editor code={this.props.code}/>
      </ProjectCardW>
    );
  }
}

export default ProjectCard;