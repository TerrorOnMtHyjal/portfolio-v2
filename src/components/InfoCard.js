import React, { Component } from 'react';
import styled from 'styled-components';

const InfoCardW = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3em 0;
  text-align: left;

  & > h1, h3, p {
    margin: 0;
    padding: 0;
  }

  & > h1 {
    align-self: center;
  }

  & > h3 {
    align-self: center;
    margin-bottom: 2em;
  }
`;

class InfoCard extends Component {
  render() {
    return (
      <InfoCardW>
        <h1>HI, I'M JARED</h1>
        <h3>An internet guy making internet things</h3>
        <p>I have an affinity for chinchillas, 80's films and Sonic the Hedgehog soundtracks</p>
        <p>Located in Longmont, CO</p>
      </InfoCardW>
    );
  }
}

export default InfoCard;