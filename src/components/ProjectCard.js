import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

const ProjectCardW = styled.div`
  position: relative;
  perspective: 1000px;
  width: 100%;
  height: 100vh;
  background: #000;
  border-bottom: 2px solid silver;
  display: flex;
  transform-origin: 0 0;
  transform: translateZ(0) scale(1);
  overflow: hidden;
`;

const WebsiteCapture = styled.img`
  transition: all 2s ease-in-out;
  transform: ${props => props.viewable ? 'rotateY(20deg) translateX(-15%) scale(0.4)' : 'rotateY(0deg) scale(1)'};
`;

class ProjectCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      inView : false
    }
  }

  handleEnter(){
    console.log("yo")
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
      <Waypoint bottomOffset="70%" onEnter={() => this.handleEnter()} onLeave={() => this.handleLeave()}>
        <div>
          <ProjectCardW>
            {() => React.cloneElement(this.props.children, { viewable : this.state.inView })}
            <WebsiteCapture src={this.props.img} alt="" viewable={this.state.inView}/>
          </ProjectCardW>
        </div>
      </Waypoint>
    );
  }
}

export default ProjectCard;