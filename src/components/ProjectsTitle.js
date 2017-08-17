import React, { Component } from 'react';
import styled from 'styled-components';

const TitleW = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background: #ffd513;
  margin-right: 10vw;

  & > h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 6em;
    margin: 0;
    padding: 0;
  }
`;

class ProjectsTitle extends Component {
  render() {
    return (
      <TitleW>
        <h1>PROJECTS</h1>
      </TitleW>
    );
  }
}

export default ProjectsTitle;