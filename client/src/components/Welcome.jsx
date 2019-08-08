import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/core';
import '../styles/Jumbotron.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Welcome = ({ loading }) => {
  const loaderPlaceholder = loading
    ? (
      <BarLoader
        css={override}
        sizeUnit="px"
        size={60}
        color="#141414"
        loading={loading}
      />
    )
    : <div id="loader-placeholder" />;
  return (
    <Jumbotron fluid>
      <Container className="text-center">
        <div id="logo"><b>Quick Flix</b></div>
        <p id="subtitle"><i>Find a decent movie decently fast!</i></p>
      </Container>
      {loaderPlaceholder}
    </Jumbotron>
  );
};

export default Welcome;
