import React, { Component } from 'react';
import styled from 'styled-components';
import { hyperlinkOverlay } from '../lib/tools';
import CodeMirror from 'react-codemirror2';

class Editor extends Component {

  componentDidMount(){
    this.cm.editor.getWrapperElement().addEventListener('mousedown', (e) => {
      if(e.target.classList.contains('cm-url')){

        if(e.target.innerText.includes("@gmail.com")){
          window.location.href = "mailto:jared.mohney@gmail.com";
        }else{
          window.open(e.target.innerText, '_blank');
        }
      }
    });

    hyperlinkOverlay(this.cm.editor);
  }

  render() {
    return (
      <CodeMirror
        ref={c => this.cm = c}
        value={
`class JaredMohney extends Developer {
  constructor(desireToWork, projects){
    super(desireToWork, projects);

    //important information I'm pretty sure
    this.name = "Jared Mohney";
    this.title = "Web Developer";
    this.location = "Longmont, CO";
    this.skills = ['Javascript', 'React', 'Redux', 'CSS3', 'HTML5', 'Express', 'Node'];
    this.description = \`\${this.name} is a full stack javascript developer with an interest in esports, chinchillas and bettering himself through challenging work.\`;
    this.github = "http://www.github.com/dustwise";
    this.linkedIn = "www.linkedin.com/in/jaredmohney";
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
    );
  }
}

export default Editor;