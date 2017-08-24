import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';
import Screenshots from './Screenshots';

const ProjectCardW = styled.div`
  display: flex;
  width: 95%;
`;

class ProjectCard extends Component {
  render() {
    return (
      <ProjectCardW>
        <Editor code={ this.props.data.code } imgs={ this.props.data.imgs } theme={ 'projectEditor' } />
      </ProjectCardW>
    );
  }
}

export default ProjectCard;