import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');
const MediaQuery = require('react-responsive');

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  overflow: hidden;
  border-top: 3px solid #ff00ae;
  z-index: 2;
  background: #1d1d1d;

  @media screen and (min-width: 1024px){
    display: flex;
    height: 75vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const SlidesWrapper = styled.div`
  position: relative;
  transition: all 1s ease-in-out;
  top: ${props => props.slid ? "-100vh" : 0};
  left: 0;
  height: 200vh;
  width: 100%;

  @media screen and (min-width: 1024px){
    align-items: center;
    height: 75vh;
    width: 100%;
  }
`;

const ProjectCardW = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  width: 100%;

  font-family: 'Roboto Slab', serif;
  color: white;

  @media screen and (min-width: 1024px){
    flex-flow: row;
    align-items: center;
    justify-content: center;
    height: 66%;
    width: 100%;
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
  position: relative;
  z-index: 1;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1024px){
    width: 960px;
    height: 540px;
    z-index: 3;
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
            <ImageW>
              <img src={this.props.img} alt="Project Image"/>
            </ImageW>
          </ProjectCardW>
          <MediaQuery query='(max-width: 1024px)'>
            <ExtraDetails onClick={() => this.handleSlide()}>
              <h1>YO</h1>
            </ExtraDetails>
          </MediaQuery>
        </SlidesWrapper>
      </Container>
    );
  }
}

export default ProjectCard;