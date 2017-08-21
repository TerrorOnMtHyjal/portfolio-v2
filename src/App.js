import React, { Component } from 'react';
import styled from 'styled-components';
import CSSTransition from 'react-transition-group/CSSTransition';

import InfoCard from './components/InfoCard';
import Projects from './components/Projects';
import { code } from './lib/data';
import carlton from './images/carlton.gif';

import './App.css';
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('./styles/titleEditor.css');

const AppW = styled.div`
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const Carlton = styled.img`
  position: fixed;
  bottom: 0;
  right: 0;
  transform: scale(0.1);
  transform-origin: 100% 100%;
`;

const Glitch = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={3000}
    classNames="glitch"
    appear={true}
  >
    {children}
  </CSSTransition>
);

class App extends Component {

  constructor(){
    super();

    this.state = {
      in: true
    }
  }

  render() {
    return (
      //<Glitch in={this.state.in}>
      <AppW className="App">

          <InfoCard/>
          <Projects/>
          <Carlton src={carlton}/>
          
      </AppW>
      //</Glitch>
    );
  }
}

export default App;
