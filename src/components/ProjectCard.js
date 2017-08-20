import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';

const ProjectCardW = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10vh 0;
`;

const ImageW = styled.div`
  background-image: url('${props => props.img}');
  background-size: cover;
  width: 45%;
`;

class ProjectCard extends Component {
  render() {
    return (
      <ProjectCardW>
        <ImageW img={this.props.img}/>
        <Editor code={this.props.code} theme={'projectEditor'} project/>
      </ProjectCardW>
    );
  }
}

export default ProjectCard;