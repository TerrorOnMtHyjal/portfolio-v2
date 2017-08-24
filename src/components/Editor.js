import React, { Component } from 'react';
import styled from 'styled-components';
import { hyperlinkOverlay } from '../lib/tools';
import ReactDOM from 'react-dom';
import CodeMirror from 'react-codemirror';

import Screenshots from './Screenshots';
import InfoLinks from './InfoLinks';

var beautify_js = require('js-beautify').js_beautify

require('../styles/editor.css');
require('../styles/titleEditor.css');
require('../styles/projectEditor.css');

const CodeW = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

class Editor extends Component {

  componentDidMount(){
    const methods = this.cm.getCodeMirrorInstance();
    const instance = this.cm.getCodeMirror();
    const lines = instance.doc.children[0].lines;
    const firstLine = lines[0].text;
    const lastLine = lines[lines.length - 1].text;
    
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
    const that = this;

    instance.on("renderLine", function(cm, line, elt) {
      var off = methods.countColumn(line.text, null, cm.getOption("tabSize")) * charWidth;
      elt.style.textIndent = "-" + off + "px";
      elt.style.paddingLeft = (basePadding + off) + "px";

      if(line.text.includes("title:")){
        elt.style.textIndent = 0;
        elt.style.paddingLeft = 0;
        elt.style.marginLeft = "-" + (charWidth) + "px";
        elt.style.fontSize = "1.5em";
      }

      if(that.props.info && line.text === firstLine || that.props.info && line.text === lastLine){

        elt.children[0].childNodes.forEach(child => {
          if(child.className === "cm-keyword"){
            child.className = "cm-keyword-info";
          }
          if(child.className === "cm-def"){
            child.className = "cm-def-info";
          }
          if(child.className === "cm-variable"){
            child.className = "cm-variable-info";
          }
        });

        elt.style.fontSize = '2em';
        elt.style.lineHeight = '1em';
        elt.style.fontFamily = "'Share Tech Mono', monospace";
      }
    });

    instance.setValue(beautify_js(instance.getValue(), { indent_size : 2 }));

    if(this.props.imgs){
      const node = ReactDOM.findDOMNode(this.refs.screenshots);
      const screenshotWidget = instance.doc.addLineWidget(4, node);

      setTimeout(function(){
        instance.refresh();
      }, 100);
    }

    if(this.props.info){
      const node = ReactDOM.findDOMNode(this.refs.infoLinks);
      const screenshotWidget = instance.doc.addLineWidget(11, node);

      setTimeout(function(){
        instance.refresh();
      }, 100);
    }
  }

  render() {
    return (
      <CodeW>
        {this.props.imgs && <Screenshots ref="screenshots" imgs={this.props.imgs}/>}
        {this.props.info && <InfoLinks ref="infoLinks" links={this.props.links}/>}
        <CodeMirror
          ref={c => this.cm = c}
          value={this.props.code}
          options={{
            mode: 'javascript',
            theme: this.props.theme ? this.props.theme : 'editor',
            inputStyle: 'textarea',
            lineWrapping: true
          }}
        />
      </CodeW>
    );
  }
}
export default Editor;