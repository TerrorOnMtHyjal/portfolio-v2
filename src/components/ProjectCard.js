import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  overflow: hidden;
  border-top: 3px solid #ff00ae;
  z-index: 2;
  background-color: #1d1d1d;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");

  @media screen and (min-width: 1024px){
    display: flex;
    justify-content: center;
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

  @media screen and (min-width: 1024px){
    flex-flow: row;
    align-items: flex-start;
    justify-content: flex-start;
    height: 66%;
  }
`;

const ExtraDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  height: 100vh;
`;

const ImageW = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media screen and (min-width: 1024px){
    position: relative;
    width: 800px;
    height: 450px;
    z-index: 3;

     & > img {
       position: absolute;
       left: 0;
       right: 0;
       top: 0;
       bottom: 0;
       width: 100%;
       height: 100%;
     }
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
            <ImageW img={this.props.img} imagePlacement={this.props.imagePlacement}>
              <img src={this.props.img} alt="Project Image"/>
            </ImageW>
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