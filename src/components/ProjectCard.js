import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';
import Screenshots from './Screenshots';

const ProjectCardW = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0 0 10vh 0;
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
        {/*<ImageW img={this.props.data.img}/>*/}
        <Editor code={this.props.data.topCode} theme={'projectEditor'} />
        <Screenshots imgs={this.props.data.imgs} />
        <Editor code={this.props.data.bottomCode} theme={'projectEditor'} />
      </ProjectCardW>
    );
  }
}

export default ProjectCard;