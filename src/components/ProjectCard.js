import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

// const ProjectCardW = styled.div`
//   perspective: 1000px;
//   display: flex;
//   flex-flow: column;
//   transform-origin: 0 0;
//   transform: translateZ(0) scale(1);
//   background: #000;
//   overflow: hidden;
//   border-bottom: 2px solid silver;
//   font-size: 1rem;
//   height: 100vh;

//   @media screen and (min-width: 1150px){
//   }

// `;

// const ProjectCardInnerW = styled.div`
//   display: flex;
//   flex-flow: column;
//   align-self: flex-end;
//   transition: all 1s ease-in;
//   z-index: 2;

//   & > div {
//     display: flex;
//     justify-content: ${props => props.right ? "flex-start" : "flex-end"};
//   }

//   @media screen and (min-width: 480px){

//   }

//   @media screen and (min-width: 1150px){
//     display: flex;
//     flex-flow: column;
//     justify-content: center;
//     width: 80%;
//     margin: 0 auto;
//     transition: all 1s ease-in;
//     z-index: 2;
//   }
// `;



// const WebsiteCapture = styled.div`
//   position: relative;
//   transition: all 2s ease-in-out;
//   z-index: 1;
//   background-image: url(${props => props.img});
//   background-position: ${props => props.imagePlacement};
//   background-repeat: no-repeat;
//   width: 100%;
//   height: 100%;
//   // transform: ${props => props.viewable ? 'rotateX(15deg) scale(1.1)' : 'rotateY(0deg) scale(1)'};

//   & > img {
//     position: absolute;
//     // ${props => props.imagePlacement};
//     height: auto;
//     opacity: 0.8;
//     transition: all 2s;
//     overflow: hidden;
//   }

//   @media screen and (min-width: 1024px){

//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     transition: all 1s ease-in-out;
//     z-index: 1;
//     ${props => props.right ? "left: " : "right: "}${props => props.viewable ? "20%" : 0};
//     transform: ${props => props.viewable ? `rotateY(${props.right ? "-20deg" : "20deg"}) scale(0.4)` : 'rotateY(0deg) scale(1)'};


//     & > img {
//       transition: all 2s;
//       position: absolute;
//       left: 0;
//       top: 0;
//       right: 0;
//       bottom: 0;
//       overflow: hidden;
//     }

//   }
// `;

const ProjectCardW = styled.div`
  position: relative;
  display: flex;
  background-image: url(${props => props.img});
  background-size: cover;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  transform-origin: 50 50;
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0)'};
  transition: all 1s linear;
  color: white;
  font-family: 'Roboto Slab', serif;
  z-index: 1;
  filter: ${props => props.flipped ? 'invert(100%)' : 'invert(0%)'};
`;

const Container = styled.div`
  position: relative;
`;

const Divider = styled.div`
  position: absolute;
  bottom: -1em;
  transform: rotate(1deg);
  left: 0;
  width: 110%;
  height: 2em;
  background: #fff;
  content: '';
  z-index: 300000;
`;

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
        <ProjectCardW img={this.props.img} flipped={this.state.flipped} onClick={() => this.invertFlip()}>
          <Waypoint bottomOffset="70%" onEnter={() => this.handleEnter()}>
            <div>
                {this.props.children}
              {/*<ProjectCardW>
                <WebsiteCapture viewable={this.state.inView} right={this.props.right} imagePlacement={this.props.imagePlacement} img={this.props.img}>
                  <img src={this.props.img} alt=""/>
                </WebsiteCapture>
                <ProjectCardInnerW right={this.props.right}>
                  {this.props.children}
                </ProjectCardInnerW>
              </ProjectCardW>*/}
            </div>
          </Waypoint>
        </ProjectCardW>
        <Divider />
      </Container>
    );
  }
}

export default ProjectCard;