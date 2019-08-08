import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../styles/Jumbotron.css';

const Welcome = () => (
  <Jumbotron fluid>
    <Container className="text-center">
      <div id="logo"><b>Quick Flix</b></div>
      <p id="subtitle"><i>Find a decent movie decently fast!</i></p>
    </Container>
  </Jumbotron>
);

export default Welcome;
