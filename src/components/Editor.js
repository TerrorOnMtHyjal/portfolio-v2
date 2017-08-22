import React, { Component } from 'react';
import styled from 'styled-components';
import { hyperlinkOverlay } from '../lib/tools';
import ReactDOM from 'react-dom';
import CodeMirror from 'react-codemirror';

import Screenshots from './Screenshots';

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
    const methods = this.cm.getCodeMirrorInstance();
    const instance = this.cm.getCodeMirror();
    
    instance.getWrapperElement().addEventListener('mousedown', (e) => {
      if(e.target.classList.contains('cm-url')){

        if(e.target.innerText.includes("@gmail.com")){
          window.location.href = "mailto:jared.mohney@gmail.com";
        }else{
          console.log(e.target.innerText)
          window.open("http://" + e.target.innerText, '_blank');
        }
      }
    });

    hyperlinkOverlay(instance);

    const charWidth = instance.defaultCharWidth();
    const basePadding = 4;

    instance.on("renderLine", function(cm, line, elt) {
      var off = methods.countColumn(line.text, null, cm.getOption("tabSize")) * charWidth;
      elt.style.textIndent = "-" + off + "px";
      elt.style.paddingLeft = (basePadding + off) + "px";
    });

    instance.setValue(beautify_js(instance.getValue()));

    if(this.props.imgs){
      const node = ReactDOM.findDOMNode(this.refs.screenshots);
      const screenshotWidget = instance.doc.addLineWidget(4, node);
      setTimeout(function(){
        instance.refresh();
      }, 100);
    }
  }

  render() {
    return (
      <CodeW>
        {this.props.imgs && <Screenshots ref="screenshots" imgs={this.props.imgs}/>}
        <CodeMirror
          ref={c => this.cm = c}
          value={this.props.code}
          options={{
            mode: 'javascript',
            theme: this.props.theme ? this.props.theme : 'editor',
            lineWrapping: true,
            lineNumber: true
          }}
        />
      </CodeW>
    );
  }
}

export default Editor;