import React, { Component } from 'react';
import styled from 'styled-components';
import { hyperlinkOverlay } from '../lib/tools';
import { code } from '../lib/data.js';
import CodeMirror from 'react-codemirror2';

require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('codemirror/theme/rubyblue.css');
require('codemirror/addon/fold/foldgutter.css');
require('codemirror/addon/fold/foldcode.js');
require('codemirror/addon/fold/foldgutter.js');
require('codemirror/addon/fold/markdown-fold.js');
require('codemirror/addon/fold/indent-fold.js');
require('codemirror/addon/fold/brace-fold.js');

require('code-mirror-themes/themes/chanfle.css');
require('../styles/infoEditor.css');

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
        value={code}
        options={{
          mode: 'javascript',
          theme: 'infoEditor',
          lineWrapping: true,
        }}
        onValueChange={(editor, metadata, value) => {
          console.log("hola")
        }}
      />
    );
  }
}

export default Editor;