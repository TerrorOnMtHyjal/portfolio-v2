import React, { Component } from 'react';
import styled from 'styled-components';

const TitleW = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 20vh;
  margin-right: 10vw;

  & > h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 6em;
    margin: 0;
    padding: 0;
  }
`;

class TitleCard extends Component {
  render() {
    return (
      <TitleW>
        <h1>{this.props.cardName}</h1>
      </TitleW>
    );
  }
}

export default TitleCard;