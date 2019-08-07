import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = ({ title }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>{title.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <img src={title.image} alt="title" />
        </Col>
        <Col>
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

export default Title;
