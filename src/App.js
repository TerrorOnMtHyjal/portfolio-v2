import React, { Component } from 'react';
import styled from 'styled-components';
import CSSTransition from 'react-transition-group/CSSTransition';

import Editor from './components/Editor';
import InfoCard from './components/InfoCard';
import ProjectCard from './components/ProjectCard';
import { code, data } from './lib/data';
import carlton from './images/carlton.gif';

import './App.css';
require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
require('./styles/titleEditor.css');

const AppW = styled.div`
  height: 100vh;
  position: relative;
`;

const SectionW = styled.div`
  background-image: ${props => props.color};
  padding: 10vh 5vw;
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

  generateProjects(data){
    return data.map((data, index) => {
      return <ProjectCard key={ `project${index}` } data={data}/>
    });
  }

  render() {
    return (
      // <Glitch in={this.state.in}>
        <AppW className="App">

            <InfoCard/>

            <SectionW color="linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)">
              <Editor code="const projects = [" theme={'titleEditor'} />
              {this.generateProjects(data)}
              <Editor code="];" theme={'titleEditor'} />
            </SectionW>

            <Carlton src={carlton}/>
            
        </AppW>
      // </Glitch>
    );
  }
}

export default App;
