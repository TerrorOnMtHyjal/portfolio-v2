import React, { Component } from 'react';
import styled from 'styled-components';


const ProtoPageCardW = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  width: 70%;
  margin: 0 auto;
  transition: all 1s ease-in;
  z-index: 2;
`;

const Details = styled.div`
  & > h1 {
    font-family: "Permanent Marker", sans-serif;
    color: #ff00ae;
    margin: 0;
    padding: 0;
  }
`;

const Features = styled.div`
  display: flex;
`;

class ProtoPageCard extends Component {
  render() {
    return (
      <ProtoPageCardW viewable={ this.props.viewable }>
        <Details>
          <h1>ProtoPage</h1>
          <Features>
          </Features>
        </Details>
      </ProtoPageCardW>
    );
  }
}

export default ProtoPageCard;