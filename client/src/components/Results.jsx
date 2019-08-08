import React from 'react';
import Title from './Title.jsx';

const Results = ({ selectedTitle, suggestedTitles }) => {
  return suggestedTitles.map((title) => {
    if (title.title === selectedTitle.title) {
      return <></>;
    }
    return <Title title={title} />;
  });
};

export default Results;
