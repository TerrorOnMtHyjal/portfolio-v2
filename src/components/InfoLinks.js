import React, { Component } from 'react';
import styled from 'styled-components';

const LinksW = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  margin-left: 5vw;
  padding: 0.2em 0;
`;

const LinkButton = styled.a`
  position: relative;
  color: #5cdb95;
  font-size: 2em;

  &::after {
    position: absolute;
    font-size: 0.75em;
    right: -0.5em;
    bottom: 0.1em;
    color: white;
    content: ',';
  }

  &:hover {
    color: white;
  }
`;

class InfoLinks extends Component {

  generateLinks(links){
    return links.map(link => {
      return <LinkButton href={link.url}><i className={link.icon} aria-hidden="true"></i></LinkButton>
    });
  }

  render() {
    return (
      <LinksW>
        {this.generateLinks(this.props.links)}
      </LinksW>
    );
  }
}

export default InfoLinks;