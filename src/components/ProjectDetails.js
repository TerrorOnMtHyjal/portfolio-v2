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

const Features = styled.div`
  display: flex;
  position: absolute;
  right: 0;
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
  padding: 0 1em;
  background: black;
`;

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

// const Buttons = styled.p`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 0.5em;
//   width: 70%;
//   margin-top: 3em;

//   & > button {
//     border: none;
//     border-bottom: 1px solid #ff00ae;
//     padding: 0.25em 0.5em;
//     background: none;
//     color: white;
//   }

//   @media screen and (min-width: 480px){
//     width: 60%;
//   }

//   @media screen and (min-width: 680px){
//     width: 50%;
//   }
// `;

const DetailsW = styled.div`
  position: relative;
  right: -1em;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  background: #ff00ae;
  padding: 1em 2em 1em 1em;
  transform: rotate(5deg);
  width: 80vw;
`;

const Title = styled.h1`
  align-self: flex-start;
  font-family: 'Permanent Marker', sans-serif;
  font-weight: 700;
  margin: 0;
  padding: 0;
  font-size: 12vw;
  word-break: normal;
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
                <Title>{this.props.title}</Title>
              </DetailsW>
              <Features>
                {this.generateFeatures(this.props.features)}
              </Features>
              {/*<Details>
                <DetailsInnerW>

                  <h1>{this.props.title}</h1>

                  <Features>
                    {this.generateFeatures(this.props.features)}
                  </Features>

                  <Description viewable={this.state.inView} right={this.props.right}>
                    {this.props.description}
                  </Description>

                  <Buttons>
                    <button>GITHUB</button>
                    <button>TRY IT</button>
                  </Buttons>

                </DetailsInnerW>
              </Details>*/}
          </div>
        </Waypoint>
    );
  }
}

export default ProjectDetails;