import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Title.css';

const TitleSelected = ({ title }) => {
  return (
    <Container id="title">
      <Row>
        <Col lg="auto" className="text-center">
          <h1>Selected: {title.title}</h1>
        </Col>
        <Col />
      </Row>
      <Row>
        <Col sm={10} md={4} lg={3} className="text-center">
          <img src={title.image} alt="title" />
        </Col>
        <Col sm={11} md={8} lg={9} className="justify-content-center">
          <Row>
            Synopsis:
            {' '}
            {title.synopsis}
          </Row>
          <Row>
            Released:
            {' '}
            {title.released}
          </Row>
          <Row>
            Rating:
            {' '}
            {title.rating}
          </Row>
          <Row>
            Runtime:
            {' '}
            {title.runtime}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TitleSelected;
