import React, { Component } from 'react';
import styled from 'styled-components';
import CodeMirror from 'react-codemirror2';
import Editor from './components/Editor';
import './App.css';

const CodeMirrorW = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const AppW = styled.div`

`;

class App extends Component {
  render() {
    return (
      <AppW className="App">
        <CodeMirrorW>
          <Editor />
        </CodeMirrorW>
      </AppW>
    );
  }
}

export default App;
