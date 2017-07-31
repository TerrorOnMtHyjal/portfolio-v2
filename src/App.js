import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const AppW = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 1px;
  perspective-origin: 0 0;
  font-size: 3rem;
  font-family: 'Roboto Slab', serif;
`;

const IntroCard = styled.div`
  transform-origin: 0 0;
  transform: translateZ(-2px) scale(3);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, rgba(43, 192, 228, 0.5), rgba(234, 236, 198, 0.5));
`;

const IntroCardInner = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
`;

const Names = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;

  & > h1, h2 {
    margin: 0;
    padding: 0;
    user-select: none;
    cursor: default;
  }

  & > h1 {
    font-weight: 700;
  }

  & > h2 {
    font-family: 'Permanent Marker', sans-serif;
    margin-top: -20px;
    color: #ff00ae;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-right: 10px;
  & > a {
    margin-left: 15px;
    & > img {
      width: 50px;
      height: 50px;
    }
  }
`;


const TripleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 0 0;
  transform: translateZ(0) scale(1);
  height: 30vh;
  background: white;
`;

const TripleCardInner = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  font-size: 0.35em;

  & > h1 {
    font-weight: 400;
    & > span {
      color: #ff00ae;
    }
  }
`;

const Project1 = styled.div`
  display: flex;
  position: relative;
  transform-origin: 0 0;
  justify-content: center;
  align-items: center;
  transform: translateZ(0) scale(1);
  height: 75vh;
  background: black;
  font-size: 0.8em;
  overflow-y: hidden;
  overflow-x: hidden;
  border-bottom: 2px solid silver;
  
  & > img {
    position: absolute;
    left: 0;
    top: -32%;
    width: 100%;
    height: auto;
    opacity: 0.1;
    z-index: 2;
  }

  &:before {
    content:                   '';
    position:                  absolute;
    height: 20%;
    top:                       40%;
    right:                     0;
    bottom:                    0;
    left:                      0;
    background-image:          linear-gradient(to left, rgba(0, 250, 206, 1), rgba(0, 0, 0, 0));
    opacity:                   .3;
  }
`;

const Project1Inner = styled.div`
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  color: white;
  width: 70%;
  z-index: 3;
`;

const Project2 = styled.div`
  display: flex;
  position: relative;
  transform-origin: 0 0;
  justify-content: center;
  align-items: center;
  transform: translateZ(0) scale(1);
  height: 75vh;
  background: black;
  font-size: 0.8em;
  overflow-y: hidden;
  overflow-x: hidden;
  border-bottom: 2px silver solid;
  
  & > img {
    position: absolute;
    left: 0;
    top: -44%;
    width: 170%;
    height: auto;
    opacity: 0.1;
    z-index: 2;
  }

  &:before {
    content:                   '';
    position:                  absolute;
    height: 20%;
    top:                       40%;
    right:                     0;
    bottom:                    0;
    left:                      0;
    background-image:          linear-gradient(to right, rgba(0, 250, 206, 1), rgba(0, 0, 0, 0));
    opacity:                   .3;
  }
`;

const Project2Inner = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  color: white;
  width: 70%;
  z-index: 3;
`;

const Project3 = styled.div`
  display: flex;
  position: relative;
  transform-origin: 0 0;
  justify-content: center;
  align-items: center;
  transform: translateZ(0) scale(1);
  height: 75vh;
  background: black;
  font-size: 0.8em;
  overflow-y: hidden;
  overflow-x: hidden;
  
  & > img {
    position: absolute;
    left: -300px;
    top: -5%;
    width: 120%;
    height: auto;
    opacity: 0.1;
    z-index: 2;
  }

  &:before {
    content:                   '';
    position:                  absolute;
    height: 20%;
    top:                       40%;
    right:                     0;
    bottom:                    0;
    left:                      0;
    background-image:          linear-gradient(to left, rgba(0, 250, 206, 1), rgba(0, 0, 0, 0));
    opacity:                   .3;
  }
`;

const Project3Inner = styled.div`
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  color: white;
  width: 70%;
  z-index: 3;
`;

const ProjectTitle = styled.h1`
  font-family: 'Permanent Marker';
  color: #ff00ae;
  margin: 0;
  padding: 0;
`;

const Features = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.5em;
`;

class App extends Component {

  render() {
    return (
      <AppW className="App">
        <IntroCard>
          <IntroCardInner>
            <Names>
              <h1>JARED MOHNEY</h1>
              <h2>Space Wizard</h2>
            </Names>
            <Links>
              <a href="http://www.github.com/dustwise">
                <img src={require('./images/github-min.png')} alt="Github Link"/>
              </a>
              <a href="http://www.linkedin.com/jaredmohney">
                <img src={require('./images/linkedin-min.png')} alt="LinkedIn Link"/>
              </a>
            </Links>
          </IntroCardInner>
        </IntroCard>
        <TripleCard>
          <TripleCardInner>
            <h1><span>coding</span> full stack</h1>
            <h1><span>designing</span> digital candy</h1>
            <h1><span>working</span> for my future</h1>
          </TripleCardInner>
        </TripleCard>

        <Project1>
          <Project1Inner>
            <ProjectTitle>PROTOPAGE</ProjectTitle>
            <Features>Mobile First | React | Redux | Google Fonts API</Features>
          </Project1Inner>
          <img src={require('./images/protopage-min.png')} alt=""/>
        </Project1>

        <Project2>
          <Project2Inner>
            <ProjectTitle>POGTRACKER</ProjectTitle>
            <Features>MongoDB | React Router 4 | React | Redux | AWS</Features>
          </Project2Inner>
          <img src={require('./images/pogtracker-min-2.png')} alt=""/>
        </Project2>

        <Project3>
          <Project3Inner>
            <ProjectTitle>ROCKET GARAGE</ProjectTitle>
            <Features>Postgresql | Passport | React | Redux | Thunk</Features>
          </Project3Inner>
          <img src={require('./images/rocket-garage-min.png')} alt=""/>
        </Project3>
      </AppW>
    );
  }
}

export default App;
