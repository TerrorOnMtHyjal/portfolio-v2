import React, { Component } from 'react';
import styled from 'styled-components';

const ContactCardW = styled.div`
  position: relative;
  font-family: 'Permanent Marker';
  font-size: 2em;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: #ff00ae;
  height: 100vh;

  & > h3 {
    margin: 0;
    padding: 0;
  }
`;

const Links = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
`;

const Link = styled.i`
  font-size: 2em;
  color: white;

  & > hover {
    color : black;
  }
`;

const Footer = styled.div`
  font-size: 0.5em;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
`;

class ContactCard extends Component {
  render() {
    return (
      <ContactCardW>
        <Links>
          <Link className="fa fa-envelope" aria-hidden="true"/>
          <Link className="fa fa fa-github" aria-hidden="true"/>
          <Link className="fa fa fa-linkedin-square" aria-hidden="true"/>
        </Links>
        {/*<Footer>
          <p>Copyright Jared Mohney, 2017</p>
        </Footer>*/}
      </ContactCardW>
    );
  }
}

export default ContactCard;