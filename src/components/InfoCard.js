import React, { Component } from 'react';
import styled from 'styled-components';
import { code } from '../lib/data';

import Editor from './Editor';

const InfoCardW = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  padding: 0 5vw;
`;

class InfoCard extends Component {

  componentDidMount(){
    this.infoTitle.cm.editor.focus();
    this.infoTitle.cm.editor.setCursor(this.infoTitle.cm.editor.lineCount(), 0);
  }

  render() {
    return (
      <InfoCardW>
        <Editor ref={e => this.infoTitle = e} code="class JaredMohney extends Developer {" theme={'titleEditor'} />
        <Editor code={code.info}/>
        <Editor code="}" theme={'titleEditor'} />
      </InfoCardW>
    );
  }
}

export default InfoCard;