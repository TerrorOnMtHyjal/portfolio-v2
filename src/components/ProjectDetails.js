import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

const DetailsW = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
`;

const TitleW = styled.div`
  position: relative;
  right: -1em;
  display: flex;
  flex-flow: column;
  background: #ff00ae;
  padding: 0.5em 2em 0.5em 0.5em;
  transform: rotate(5deg);
  z-index: 2;
`;

const Title = styled.h1`
  font-family: 'Permanent Marker', sans-serif;
  font-weight: 700;
  margin: 0;
  padding: 0;
  font-size: 3em;
  word-break: normal;
`;

const Features = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  z-index: 2;
`;

const Feature = styled.p`
  position: relative;
  transition: right 1s ease-in;
  transition-delay: ${props => props.delay};
  right: ${props => props.viewable ? 0 : "-100%"};
  margin: 0;
  padding: 0;
  font-size: 1em;
  margin-bottom: 0.25em;
  padding: 0 0.5em;
  background: black;
`;

const Actions = styled.div`
  position: relative;
  top: 0.75em;
  right: -1em;
  transform: rotate(5deg);
  padding: 0.25em 0.5em 0em 0.5em;
  justify-content: space-between;
  display: flex;
  color: black;
  background: #ff00ae;
  z-index: 3;

  & > a {
    color: black;

    &:hover {
      color: white;
    }
  }
`;

const Button = styled.i`
  margin: 0;
  margin-right: 0.5em;
  padding: 0;
  font-size: 2.5em;
  cursor: pointer;

  &:hover {
    color: white;
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
                viewable={this.state.inView}
              >
              &nbsp;{feature}&nbsp;
            </Feature>
    });
  }

  render() {
    return (
        <Waypoint bottomOffset="30%" onEnter={() => this.handleEnter()}>
          <div>
            <DetailsW>

              <Actions>
                <Button className="fa fa-info-circle" aria-hidden="true" onClick={() => this.props.slide()}/>
                <a target="_blank" href={this.props.links.github}>
                  <Button className="fa fa-github" aria-hidden="true"/>
                </a>
                <a target="_blank" href={this.props.links.external}>
                  <Button className="fa fa-external-link-square" aria-hidden="true" />
                </a>
              </Actions>

              <TitleW>
                <Title>{this.props.title}</Title>
              </TitleW>

              <Features>
                {this.generateFeatures(this.props.features)}
              </Features>

            </DetailsW>
          </div>
        </Waypoint>
    );
  }
}

export default ProjectDetails;