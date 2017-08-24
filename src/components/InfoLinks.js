import React, { Component } from 'react';
import styled from 'styled-components';

const LinksW = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4em;
  padding: 0.2em 0;
`;

const LinkButton = styled.a`
  position: relative;
  color: #edf5e1;
  font-size: 3em;
  margin-right: 1.5em;

  &::after {
    position: absolute;
    font-size: 0.5em;
    right: -0.5em;
    bottom: 0.2em;
    color: white;
    content: ',';
  }

  &:hover {
    color: #5cdb95;
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