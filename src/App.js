import React, { Component } from 'react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import CodeMirror from 'react-codemirror2';
import Editor from './components/Editor';
import { code } from './lib/data';

import './App.css';
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('./styles/titleEditor.css');

const AppW = styled.div`
  height: 100vh;
`;

const SectionW = styled.div`
  background-image: ${props => props.color};
  padding-bottom: 5vh;
  padding-left: 5vw;
`;

const CodeMirrorW = styled.div`
  position: relative;
  display: flex;
  width: 100%;
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

          <SectionW color="linear-gradient(to right, #4facfe 0%, #00f2fe 100%)">
            <Editor code="class JaredMohney extends Developer {" title />
            <CodeMirrorW>
              <Glitch in={this.state.in}>
                <Editor code={code.info}/>
              </Glitch>
            </CodeMirrorW>
          </SectionW>

          <SectionW color="linear-gradient(to right, #43e97b 0%, #38f9d7 100%)">
            <Editor code="const projects = [" title />
            <CodeMirrorW>
              <Editor code={code.projects.pogTracker} />
            </CodeMirrorW>
          </SectionW>

        {/*</Glitch>*/}
      </AppW>
    );
  }
}

export default App;
