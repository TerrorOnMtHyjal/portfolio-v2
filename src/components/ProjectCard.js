import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  border-top: 3px solid #ff00ae;
  z-index: 2;
  background: black;

  @media screen and (min-width: 1024px){
    background-image: none;
    overflow: hidden;
    flex-basis: 0;
    flex-grow: 1;
  }
`;

const SlidesWrapper = styled.div`
  position: relative;
  transition: all 1s ease-in-out;
  top: ${props => props.slid ? "-100vh" : 0};
  height: 200vh;
`;

const ProjectCardW = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;

  font-family: 'Roboto Slab', serif;
  color: white;
`;

const ExtraDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  height: 100vh;
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: ${props => props.imagePlacement};
  transition: all 0.25s ease-in-out;
  width: 100%;
  opacity: 0.5;
  z-index: 1;

  &:hover{
    transform: scale(1.1);
    opacity: 1;
  }

  @media screen and (min-width: 1024px){
    position: static;
    height: 50%;
  }
`;

class ProjectCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      inView : false,
      flipped: false,
      slid: false
    }

    this.handleSlide = this.handleSlide.bind(this);
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

  handleSlide(){
    this.setState({
      ...this.state,
      slid: !this.state.slid
    })
  }

  render() {
    return (
      <Container>
        <SlidesWrapper slid={this.state.slid}>
          <ProjectCardW 
          img={this.props.img}
          imagePlacement={this.props.imagePlacement}
          >
            <Waypoint bottomOffset="70%" onEnter={() => this.handleEnter()}>
              <div>
                  {React.Children.map(this.props.children, (child) => React.cloneElement(child, { slide: this.handleSlide }))}
                  
              </div>
            </Waypoint>
            <Image img={this.props.img} imagePlacement={this.props.imagePlacement}/>
          </ProjectCardW>
          <ExtraDetails onClick={() => this.handleSlide()}>
            <h1>YO</h1>
          </ExtraDetails>
        </SlidesWrapper>
      </Container>
    );
  }
}

export default ProjectCard;