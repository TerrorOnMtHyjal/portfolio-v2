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
            value={
`class JaredMohney extends Developer {
  constructor(desireToWork, projects){
    super(desireToWork, projects);

    //important information I'm pretty sure
    this.name = "Jared Mohney";
    this.title = "Web Developer";
    this.location = "Longmont, CO";
    this.skills = ['Javascript', 'React', 'Redux', 'CSS3', 'HTML5', 'Express', 'Node'];
    this.description = \`\${this.name}\ is a full stack javascript developer with an interest in esports, chinchillas and bettering himself through challenging work.\`;
    this.github = "${<a href='http://www.github.com/dustwise'>test</a>}";
    this.linkedIn = "http://www.linkedin.com/jaredmohney";
    this.email = "jared.mohney@gmail.com"

    //irrelevant?
    // this.favoriteMovies = ["Little Shop of Horrors", "Aliens", "There Will Be Blood", "Terminator 2: Judgment Day"];
    // this.favoriteGames = ["Shadow of the Colossus", "Kingdom Hearts 2", "Sonic The Hedgehog 3 & Knuckles", "DOTA2"];
  }
}`
            }
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
