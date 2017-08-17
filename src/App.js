import React, { Component } from 'react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import ProjectsTitle from './components/ProjectsTitle';
import CodeMirror from 'react-codemirror2';
import Editor from './components/Editor';
import { code } from './lib/data';

import './App.css';
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('code-mirror-themes/themes/summerfruit.css');

const AppW = styled.div`
  background: #ffd513;
  height: 100vh;
`;

const InfoWrapper = styled.div`
  background: #33cc99;
`;

const CodeMirrorW = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  overflow: hidden;
`;

const Glitch = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={3000}
    classNames="glitch"
    appear={true}
  >
    {children}
  </CSSTransition>
);

class App extends Component {

  constructor(){
    super();

    this.state = {
      in: true
    }
  }

  render() {
    return (
      <AppW className="App">
        {/*<Glitch in={this.state.in}>*/}

          <InfoWrapper>
            <ProjectsTitle/>
              <CodeMirrorW>
                <Glitch in={this.state.in}>
                  <Editor code={code.info} theme={'summerfruit'}/>
                </Glitch>
              </CodeMirrorW>
          </InfoWrapper>

        {/*</Glitch>*/}
        <ProjectsTitle/>
      </AppW>
    );
  }
}

export default App;
