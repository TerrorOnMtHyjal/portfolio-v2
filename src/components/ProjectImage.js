import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;

class ProjectImage extends Component {
  render() {
    return (
      <Image src={this.props.img}/>
    );
  }
}

export default ProjectImage;