import React, { Component } from 'react';
import styled from 'styled-components';
const Waypoint = require('react-waypoint');

const TaglineCardW = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 0 0;
  transform: translateZ(0) scale(1);
  background: white;
  width: 100%;
  font-size: 0.8rem;

  & > div {
    width: 100%;
  }

  @media screen and (min-width: 550px){
    font-size: 1rem;
  }
  z-index: 4;
`;

const TaglineCardInner = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  transition: opacity 2s ease-out;
  padding: 4em 0;

  @media screen and (min-width:840px){
    flex-flow: row;
    justify-content: space-between;
  }

  @media screen and (min-width:950px){
    width: 80%;
  }
`;

const Tagline = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  transition: all 1s ease-out;
  transition-delay: ${props => props.delay};
  opacity: ${props => props.viewable ? 1 : 0};
  padding: 4em 0;

  & > h1 {
    padding: 0;
    margin: 0;
  }

  & > h1:first-child {
    color: #ff00ae;
    font-weight: 700;
  }

  & > h1:last-child {
    font-weight: 100;
    letter-spacing: 3px;
  }

  @media screen and (min-width:550px){
    flex-flow: row;

    & > h1:first-child {
      margin-right: 20px;
    }
  }

  @media screen and (min-width:840px){
    flex-flow: column;

    & > h1:first-child {
      margin-right: 0;
    }
  }
`;

class TaglineCard extends Component {
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
      <TaglineCardW>
        <Waypoint bottomOffset="20%" onEnter={() => this.handleEnter()}>
          <div>
            <TaglineCardInner>

              <Tagline 
                viewable={this.state.inView}
                delay="0.1s"
              >
                <h1>CODING</h1>
                <h1>full stack</h1>
              </Tagline>

              <Tagline
                viewable={this.state.inView}
                delay="0.5s"
              >
                <h1>DESIGNING</h1>
                <h1>digital candy</h1>
              </Tagline>

              <Tagline
                viewable={this.state.inView}
                delay="1s"
              >
                <h1>WORKING</h1>
                <h1>for my future</h1>
              </Tagline>

            </TaglineCardInner>
          </div>
        </Waypoint>
      </TaglineCardW>
    );
  }
}

export default TaglineCard;