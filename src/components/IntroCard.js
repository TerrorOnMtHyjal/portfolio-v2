import React, { Component } from 'react';
import styled from 'styled-components';

const Waypoint = require('react-waypoint');

const IntroCardW = styled.div`
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
  transition: all 2s ease-in-out;
  transition-delay: 0.5s;
  opacity: ${props => props.viewable ? 1 : 0};

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
  justify-content: flex-end;
  transition: all 2s ease-out;
  opacity: ${props => props.viewable ? 1 : 0};
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

class IntroCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      inView : false
    }
  }

  handleEnter(){
    this.setState({
      inView: true
    })
  }

  render() {
    return (
      <IntroCardW>
        <IntroCardInner>

          <Waypoint onEnter={() => this.handleEnter()}>
            <div>
              <Names viewable={this.state.inView}>
                <h1>JARED MOHNEY</h1>
                <h2>Space Wizard</h2>
              </Names>

              <Links viewable={this.state.inView}>
                <a href="http://www.github.com/dustwise">
                  <img src={require('../images/github-min.png')} alt="Github Link"/>
                </a>
                <a href="http://www.linkedin.com/jaredmohney">
                  <img src={require('../images/linkedin-min.png')} alt="LinkedIn Link"/>
                </a>
              </Links>
            </div>
          </Waypoint>

        </IntroCardInner>
      </IntroCardW>
    );
  }
}

export default IntroCard;