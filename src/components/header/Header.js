import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './header.css';

class Header extends Component {
  render() {
    return (
      <Jumbotron fluid className='header'>
        <Container className='headerContainer'>
          <h1>Python Content Board</h1>
          <p>Internal repo of Python on Azure content.</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Header;
