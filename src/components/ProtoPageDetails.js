import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

const Details = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
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

const Feature = styled.p`
  font-family: 'Roboto Slab';
  font-size: 1.25rem;
  transition: all 1s ease-out;
  color: white;
  transition-delay: ${props => props.delay};
  opacity: ${props => props.viewable ? 1 : 0};
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: white;
  text-align: right;
  width: 40%;
`;

class ProtoPageDetails extends Component {
  constructor(props){
    super(props);

    this.state = {
      inView : false
    }
  }

  handleEnter(){
    this.setState({
      inView : true
    })
  }

  generateFeatures(features){
    const startDelay = 0.5;
    let delay = 0.15;
    return features.map((feature, i) => {
      return <Feature delay={(startDelay + (delay * i)) + "s"} viewable={this.state.inView}>&nbsp;{feature}&nbsp;</Feature>
    });
  }

  render() {
    return (
        <Waypoint bottomOffset="30%" onEnter={() => this.handleEnter()}>
          <div>
              <Details>
                <h1>ProtoPage</h1>
                <Features>
                  {this.generateFeatures(["Mobile First", " | ", "React",  " | ", "Redux",  " | ", "Google Fonts API"])}
                </Features>
                <Description>
                  Tired of your prototypes lacking pizazz but don't want to spend the time finding compatible fonts? 
                  Quickly randomize through Google fonts, lock in the ones you like and find those pairings in a fraction of the time!
                </Description>
              </Details>
          </div>
        </Waypoint>
    );
  }
}

export default ProtoPageDetails;