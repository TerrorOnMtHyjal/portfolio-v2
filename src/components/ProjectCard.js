import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

const ProjectCardW = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: ${props => props.imagePlacement};

  border-top: 3px solid #ff00ae;

  font-family: 'Roboto Slab', serif;
  color: white;

  transform-origin: 50 50;
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0)'};
  transition: all 1s linear;
  filter: ${props => props.flipped ? 'invert(100%)' : 'invert(0%)'};

  z-index: 1;
`;

const Container = styled.div`
  position: relative;
`;

// const Divider = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 5%;
//   z-index: 10;
// `;

class ProjectCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      inView : false,
      flipped: false
    }
  }

  handleEnter(){
    this.setState({
      ...this.state,
      inView : true,
    });
  }

  handleLeave(){
    this.setState({
      ...this.state,
      inView : false
    });
  }

  invertFlip(){
    this.setState({
      ...this.state,
      flipped: !this.state.flipped
    })
  }

  render() {
    return (
      <Container>
        <ProjectCardW 
          img={this.props.img} 
          flipped={this.state.flipped}
          imagePlacement={this.props.imagePlacement} 
          onClick={() => this.invertFlip()}>
          <Waypoint bottomOffset="70%" onEnter={() => this.handleEnter()}>
            <div>
                {this.props.children}
            </div>
          </Waypoint>
        </ProjectCardW>
        {/*<Divider img={this.props.img} imagePlacement={this.props.imagePlacement}/>*/}
      </Container>
    );
  }
}

export default ProjectCard;