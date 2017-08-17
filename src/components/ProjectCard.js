import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';
import pogTrackerImg from '../images/pogtracker-2.png';

const ProjectCardW = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageW = styled.div`
  background-image: url('${pogTrackerImg}');
  background-size: cover;
  width: 400px;
  height: auto;
`;

class ProjectCard extends Component {
  render() {
    return (
      <ProjectCardW>
        <ImageW />
        <Editor code={this.props.code} theme={'projectEditor'}/>
      </ProjectCardW>
    );
  }
}

export default ProjectCard;