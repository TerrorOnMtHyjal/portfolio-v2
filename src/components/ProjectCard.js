import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

const ProjectCardW = styled.div`
  perspective: 1000px;
  display: flex;
  flex-flow: column;
  align-items: center;
  transform-origin: 0 0;
  transform: translateZ(0) scale(1);
  background: #000;
  overflow: hidden;
  border-bottom: 2px solid silver;
  font-size: 1rem;
  height: 100vh;

  @media screen and (min-width: 1150px){
    height: 100vh;
  }
`;

const ProjectCardInnerW = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  transition: all 1s ease-in;
  z-index: 2;

  & > div {
    display: flex;
    justify-content: ${props => props.right ? "flex-start" : "flex-end"};
  }

  @media screen and (min-width: 480px){

  }

  @media screen and (min-width: 1150px){
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    transition: all 1s ease-in;
    z-index: 2;
  }
`;

const WebsiteCapture = styled.div`
  transition: all 2s ease-in-out;
  z-index: 1;
  height: auto;
  transform: ${props => props.viewable ? 'rotateX(15deg) scale(1)' : 'rotateY(0deg) scale(1)'};
  margin: 1.5em 0;

  & > img {
    transition: all 2s;
    overflow: hidden;
    max-width: 90%;
    max-height: 90%;
    margin: 1.5em auto;
  }

  @media screen and (min-width: 1150px){

    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transition: all 1s ease-in-out;
    z-index: 1;
    ${props => props.right ? "left: " : "right: "}${props => props.viewable ? "20%" : 0};
    transform: ${props => props.viewable ? `rotateY(${props.right ? "-20deg" : "20deg"}) scale(0.4)` : 'rotateY(0deg) scale(1)'};


    & > img {
      transition: all 2s;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
    }

  }
`;

class ProjectCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      inView : false
    }
  }

  handleEnter(){
    this.setState({
      inView : true
    });
  }

  handleLeave(){
    this.setState({
      inView : false
    });
  }

  render() {
    return (
      <Waypoint bottomOffset="70%" onEnter={() => this.handleEnter()}>
        <div>
          <ProjectCardW>
            <WebsiteCapture viewable={this.state.inView} right={this.props.right}>
              <img src={this.props.img} alt=""/>
            </WebsiteCapture>
            <ProjectCardInnerW right={this.props.right}>
              {this.props.children}
            </ProjectCardInnerW>
          </ProjectCardW>
        </div>
      </Waypoint>
    );
  }
}

export default ProjectCard;