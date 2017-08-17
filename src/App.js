import React, { Component } from 'react';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import CodeMirror from 'react-codemirror2';
import Editor from './components/Editor';
import ProjectCard from './components/ProjectCard';
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
  padding: 5vh 5vw;
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

  componentDidMount(){
    this.infoTitle.cm.editor.focus();
    this.infoTitle.cm.editor.setCursor(this.infoTitle.cm.editor.lineCount(), 0);
  }

  render() {
    return (
      // <Glitch in={this.state.in}>
        <AppW className="App">

            <SectionW color="linear-gradient(to right, #4facfe 0%, #00f2fe 100%)">
              <Editor ref={e => this.infoTitle = e} code="class JaredMohney extends Developer {" title />
              <Editor code={code.info}/>
              <Editor code="}" title />
            </SectionW>

            <SectionW color="linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)">
              <Editor code="const projects = [" title />
              <ProjectCard code={ code.projects.pogTracker }/>
              <Editor code="];" title />
            </SectionW>

        </AppW>
      // </Glitch>
    );
  }
}

export default App;
