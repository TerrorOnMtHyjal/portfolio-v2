import React, { Component } from 'react';
import styled from 'styled-components';
import CodeMirror from 'react-codemirror2';
import Editor from './components/Editor';
import Transition from 'react-transition-group/Transition';

import './App.css';

const CodeMirrorW = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const duration = 2000;

const defaultStyle = {
  transition: `filter ${duration}ms ease-in-out`,
  filter: 'grayscale(100%)',
}

const transitionStyles = {
  entering: { filter: 'grayscale(0)' },
  entered:  { filter: 'grayscale(0)' },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration} appear="true">
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <CodeMirrorW>
          <Editor />
        </CodeMirrorW>
      </div>
    )}
  </Transition>
);


const AppW = styled.div`

`;

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
        <Fade in={this.state.in}>
        </Fade>
      </AppW>
    );
  }
}

export default App;
