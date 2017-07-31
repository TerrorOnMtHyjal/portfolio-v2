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
    font-family: 'Roboto Slab', serif;
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

const FirstCommentCard = styled.div`
  transform-origin: 0 0;
  transform: translateZ(0) scale(1);
  background: white;
  height: 300vh;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  font-family: 'Roboto Slab', serif;   
  font-size: 0.5em;

  & > h1 {
    font-weight: 400;
    & > span {
      color: #ff00ae;
    }
  }
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
        <FirstCommentCard>
          <h1><span>coding</span> full stack</h1>
          <h1><span>designing</span> digital candy</h1>
          <h1><span>working</span> for my future</h1>
        </FirstCommentCard>
      </AppW>
    );
  }
}

export default App;
