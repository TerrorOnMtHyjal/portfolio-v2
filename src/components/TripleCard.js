import React, { Component } from 'react';
import styled from 'styled-components';

const TripleCardW = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 0 0;
  transform: translateZ(0) scale(1);
  height: 30vh;
  background: white;
`;

const TripleCardInner = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  font-size: 0.35em;

  & > h1 {
    font-weight: 400;
    & > span {
      color: #ff00ae;
    }
  }
`;

class TripleCard extends Component {
  render() {
    return (
      <TripleCardW>
        <TripleCardInner>
          <h1><span>coding</span> full stack</h1>
          <h1><span>designing</span> digital candy</h1>
          <h1><span>working</span> for my future</h1>
        </TripleCardInner>
      </TripleCardW>
    );
  }
}

export default TripleCard;