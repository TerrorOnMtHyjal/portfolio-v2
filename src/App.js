import React, { Component } from 'react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import ProjectsTitle from './components/ProjectsTitle';
import CodeMirror from 'react-codemirror2';
import Editor from './components/Editor';

import './App.css';

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

const AppW = styled.div`
  background: #ffd513;
  height: 100vh;
`;

class App extends Component {

  constructor(){
    super();

    this.state = {
      in: true
    }
  }

  handleEnd(){
    console.log("done")
  }

  render() {
    return (
      <AppW className="App">
        <ProjectsTitle/>
          <CodeMirrorW>
            <Glitch in={this.state.in}>
              <Editor />
            </Glitch>
          </CodeMirrorW>
        <ProjectsTitle/>
      </AppW>
    );
  }
}

export default App;
