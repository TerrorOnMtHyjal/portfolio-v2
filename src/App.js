import React, { Component } from 'react';
import styled from 'styled-components';
import CodeMirror from 'react-codemirror2';
import './App.css';
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/dracula.css');
require('codemirror/addon/fold/foldgutter.css');
require('codemirror/addon/fold/foldcode.js');
require('codemirror/addon/fold/foldgutter.js');
require('codemirror/addon/fold/markdown-fold.js');
require('codemirror/addon/fold/indent-fold.js');
require('codemirror/addon/fold/brace-fold.js');

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
          <CodeMirror
            value='function(num){num * 2}'
            options={{
              mode: 'javascript',
              theme: 'dracula',
              lineNumbers: true,
              lineWrapping: true,
              foldGutter: true,
              gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
            }}
            onValueChange={(editor, metadata, value) => {
              console.log("hola")
            }}
          />
        </CodeMirrorW>
      </AppW>
    );
  }
}

export default App;
