import React, { Component } from 'react';
import styled from 'styled-components';
import { code } from '../lib/data';

import Editor from './Editor';

const InfoCardW = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  // background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  background-color: #fc4445;
`;

/*
#fc445 red 
#3feee6 bright teal 
#55bcc9 muted teal 
#97caef muted dark blue 
#cafafe muted light blue
#1a1a1d dark gray
*/

const InnerW = styled.div`
  width: 80%;
`;

class InfoCard extends Component {

  componentDidMount(){
    const instance = this.infoTitle.cm.getCodeMirror();

    this.infoTitle.cm.focus();
    instance.setCursor(instance.lineCount(), 0);
  }

  render() {
    return (
      <InfoCardW>
        <InnerW>
          <Editor ref={e => this.infoTitle = e} code="class JaredMohney extends Developer {" theme={'titleEditor'} />
          <Editor code={code.info}/>
          <Editor code="}" theme={'titleEditor'} />
        </InnerW>
      </InfoCardW>
    );
  }
}

export default InfoCard;