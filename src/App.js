import React, { Component } from 'react';
import styled from 'styled-components';
import CodeMirror from 'react-codemirror2';
import './App.css';
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/addon/fold/foldgutter.css');
require('codemirror/addon/fold/foldcode.js');
require('codemirror/addon/fold/foldgutter.js');
require('codemirror/addon/fold/markdown-fold.js');
require('codemirror/addon/fold/indent-fold.js');
require('codemirror/addon/fold/brace-fold.js');

const StyledCodeMirror = styled(CodeMirror)`
  height: 100vh;
  background: red;
`;

const AppW = styled.div`

`;

class App extends Component {
  render() {
    return (
      <AppW className="App">
        <StyledCodeMirror
          value='function(num){num * 2}'
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
            lineWrapping: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
          }}
          onValueChange={(editor, metadata, value) => {
            console.log("hola")
          }}
        />
      </AppW>
    );
  }
}

export default App;
