import React, { Component } from 'react';
import styled from 'styled-components';
import { hyperlinkOverlay } from '../lib/tools';
import CodeMirror from 'react-codemirror2';
var beautify_js = require('js-beautify').js_beautify

require('../styles/editor.css');
require('../styles/titleEditor.css');
require('../styles/projectEditor.css');

const CodeW = styled.div`
  display: flex;
  overflow: hidden;
`;

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

    this.cm.editor.on("renderLine", (e) => {
      console.log(e);
    });
    this.cm.editor.setValue(beautify_js(this.cm.editor.getValue()));
  }

  render() {
    return (
      <CodeW>
        <CodeMirror
          ref={c => this.cm = c}
          value={this.props.code}
          options={{
            mode: 'javascript',
            theme: this.props.theme ? this.props.theme : 'editor',
            lineWrapping: true,
            lineNumber: true
          }}
          onValueChange={(editor, metadata, value) => {
            console.log("hola")
          }}
        />
      </CodeW>
    );
  }
}

export default Editor;