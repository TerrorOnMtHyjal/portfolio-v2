import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  border-top: 3px solid #ff00ae;
  z-index: 2;
  background: white;
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
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: ${props => props.imagePlacement};

  font-family: 'Roboto Slab', serif;
  color: white;

  transform-origin: 50 50;
  z-index: 3;

  @media screen and (min-width: 1024px){
    background-image: none;
    background: #1b1b1b;
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
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

const Image = styled.div`
  position: absolute;
  left: 7.5%;
  top: 30%;
  max-width: 40%;
  display: none;

  @media screen and (min-width: 1024px){
    display: inline;
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
                {/*<Image>
                  <img src={this.props.img} alt=""/>
                </Image>*/}
                  {React.Children.map(this.props.children, (child) => React.cloneElement(child, { slide: this.handleSlide }))}
              </div>
            </Waypoint>
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