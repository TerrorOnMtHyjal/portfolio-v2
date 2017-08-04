import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

// const Details = styled.div`
//   display: flex;
//   font-size: 2rem;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0.8);
//   align-items: center;

//   @media screen and (min-width: 1024px){
//     display: flex;
//     width: 40%;
//     height: 100vh;
//   }
// `;

// const DetailsInnerW = styled.div`
//   display: flex;
//   flex-flow: column;
//   align-items: center;
//   justify-content: center;
//   width: 90%;
//   margin: 0 auto;
//   padding: 2em 0;
  
//   & > h1 {
//     font-family: "Permanent Marker", sans-serif;
//     font-size: 12vw;
//     color: #ff00ae;
//     margin: 0;
//     padding: 0;
//   }

//   @media screen and (min-width: 940px){
//     & > h1 {
//       font-size: 10vw;
//     }
//   }

//   @media screen and (min-width: 1024px){
//     height: 100%;
//     & > h1 {
//       font-size: 6vw;
//     }
//   }
// `;

// const Description = styled.p`
//   padding-top: 2em;
//   font-size: 0.5em;
//   color: white;
//   text-align: left;
//   margin: 0;

//   transition: opacity 1s ease-out;
//   transition-delay: 2.5s;
//   opacity: ${props => props.viewable ? 1 : 0};

//   @media screen and (min-width: 850px){
//     width: 80%;
//   }

//   @media screen and (min-width: 1024px){
//     // text-align: ${props => props.right ? "right" : "left"};
//   }
// `;

const DetailsW = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
`;

const TitleW = styled.div`
  position: relative;
  right: -1em;
  display: flex;
  flex-flow: column;
  background: #ff00ae;
  padding: 0.5em 2em 0.5em 0.5em;
  transform: rotate(5deg);
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
  z-index: 2;

   & > i {
     margin: 0;
     margin-right: 0.5em;
     padding: 0;
     font-size: 2.5em;
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
                <i className="fa fa-github" aria-hidden="true"></i>
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                <i className="fa fa-external-link-square" aria-hidden="true"></i>
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