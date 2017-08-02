import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

const Details = styled.div`

  display: flex;
  flex-flow: column;
  width: 95%;
  align-items: center;
  font-size: 2rem;

  & > h1 {
    font-family: "Permanent Marker", sans-serif;
    font-size: 12vw;
    color: #ff00ae;
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 1150px){
    display: flex;
    flex-flow: column;
    width: 40%;
    align-items: ${props => props.right ? "flex-end" : "flex-start"};

    & > h1 {
      font-family: "Permanent Marker", sans-serif;
      color: #ff00ae;
      margin: 0;
      padding: 0;
    }
  }
`;

const Features = styled.div`
  display: flex;
`;

const Feature = styled.p`
  font-family: 'Roboto Slab';
  font-size: 0.5em;
  transition: opacity 1s ease-out;
  color: white;
  transition-delay: ${props => props.delay};
  opacity: ${props => props.viewable ? 1 : 0};
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  padding-top: 2em;
  font-size: 0.5em;
  color: white;
  text-align: center;
  margin: 0;

  @media screen and (min-width: 1150px){
    text-align: ${props => props.right ? "right" : "left"};
  }
`;

class ProjectDetails extends Component {
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
      return <Feature
                key={this.props.title + " " + i} 
                delay={(startDelay + (delay * i)) + "s"} 
                viewable={this.state.inView}>&nbsp;{feature}&nbsp;
            </Feature>
    });
  }

  render() {
    return (
        <Waypoint bottomOffset="30%" onEnter={() => this.handleEnter()}>
          <div>
              <Details right={this.props.right}>
                <h1>{this.props.title}</h1>
                <Features>
                  {this.generateFeatures(this.props.features)}
                </Features>
                <Description right={this.props.right}>
                  {this.props.description}
                </Description>
              </Details>
          </div>
        </Waypoint>
    );
  }
}

export default ProjectDetails;