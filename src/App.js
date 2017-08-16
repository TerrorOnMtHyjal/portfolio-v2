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
  componentDidMount(){
    console.log(this.cm.editor)

    this.cm.editor.getWrapperElement().addEventListener('mousedown', (e) => {
      if(e.target.classList.contains('cm-url')){
        console.log(e.target.innerText);
        window.open(e.target.innerText, '_blank');
      }
    });

    this.hyperlinkOverlay(this.cm.editor);
  }

  hyperlinkOverlay(cm) {
    if (!cm) return;
    
    const rx_word = "\" "; // Define what separates a word

    function isUrl(s) {
      if (!isUrl.rx_url) {
        isUrl.rx_url=/^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
        isUrl.prefixes=['http:\/\/', 'https:\/\/', 'ftp:\/\/', 'www.'];
        isUrl.domains=['com','ru','net','org','de','jp','uk','br','pl','in','it','fr','au','info','nl','ir','cn','es','cz','kr','ua','ca','eu','biz','za','gr','co','ro','se','tw','mx','vn','tr','ch','hu','at','be','dk','tv','me','ar','no','us','sk','xyz','fi','id','cl','by','nz','il','ie','pt','kz','io','my','lt','hk','cc','sg','edu','pk','su','bg','th','top','lv','hr','pe','club','rs','ae','az','si','ph','pro','ng','tk','ee','asia','mobi'];
      }

      if (!isUrl.rx_url.test(s)) return false;
      for (let i=0; i<isUrl.prefixes.length; i++) if (s.startsWith(isUrl.prefixes[i])) return true;
      for (let i=0; i<isUrl.domains.length; i++) if (s.endsWith('.'+isUrl.domains[i]) || s.includes('.'+isUrl.domains[i]+'\/') ||s.includes('.'+isUrl.domains[i]+'?')) return true;
      return false;
    }

    cm.addOverlay({
      token: function(stream) {
        let ch = stream.peek();
        let word = "";

        if (rx_word.includes(ch) || ch==='\uE000' || ch==='\uE001') {
          stream.next();
          return null;
        }

        while ((ch = stream.peek()) && !rx_word.includes(ch)) {
          word += ch;
          stream.next();
        }

        if (isUrl(word)) return "url";
      }},	
      { opaque : true }
    );
  }
  
  render() {
    return (
      <AppW className="App">

        <CodeMirrorW>
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
