import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { code } from '../lib/data';

import Editor from './Editor';

const InfoCardW = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  // background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  background-color: #05386B;
`;

/*
#fc4445 red 
#3feee6 bright teal 
#55bcc9 muted teal 
#97caef muted dark blue 
#cafafe muted light blue
#1a1a1d dark gray
*/

/*
#05386B dark blue 
#379683 muted dark green 
#5cdb95 bright green 
#8ee4af muted bright green 
#edf5e1 off white
*/

const InnerW = styled.div`
  width: 100%;
  z-index: 1;
`;

const Bars = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  overflow: hidden;
  height: 100%;
  width: 50%;
`;

const Bar = styled.div`
  position: relative;
  right: 0;
  width: ${props => props.length}%;
  min-height: 1px;
  flex-grow: 1;
  background-color: #5cdb95;
  filter: grayscale(${props => props.greyscale}%);
  opacity: ${props => props.opacity};
  animation: ${generateAnimation(props => props.length)} ${props => props.speed}s ease-in-out infinite;
  animation-direction: alternate;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
    background: white;
    content: '';
  }
`;

function generateAnimation(length){
  return keyframes`
    from{
      width: ${length}%;
    }

    to {
      width: 0%;
    }
  `;
}

class InfoCard extends Component {

  componentDidMount(){
    const instance = this.infoTitle.cm.getCodeMirror();

    this.infoTitle.cm.focus();
    instance.setCursor(instance.lineCount(), 0);
  }

  generateBars(amount){
    const bars = [];

    for(let i = 0; i < amount; i++){
      const length = Math.floor(Math.random() * 100) + 1;
      const opacity = Math.random() / 5;
      let speed = ((Math.random() * 10) + 1);
      const greyscale = (Math.random() * 100) * 2;

      if(speed < 3){
        speed = speed * 2;
      }
      const newBar = <Bar length={length} opacity={opacity} speed={speed} greyscale={greyscale}/>

      bars.push(newBar);
    }

    return bars;
  }

  render() {
    return (
      <InfoCardW>
        <InnerW>
          <Editor ref={e => this.infoTitle = e} code="class JaredMohney extends Developer {" theme={'titleEditor'} />
          <Editor code={code.info}/>
          <Editor code="}" theme={'titleEditor'} />
        </InnerW>
        <Bars>
          {this.generateBars(250)}
        </Bars>
      </InfoCardW>
    );
  }
}

export default InfoCard;