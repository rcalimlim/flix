import React from 'react';
import Title from './Title.jsx';
import TitleNotFound from './TitleNotFound.jsx';

const Selected = ({ selectedTitle }) => {
  let render = <Title title={selectedTitle} />;
  if (selectedTitle.blank) {
    render = <></>;
  } else if (Object.keys(selectedTitle).length === 0) {
    render = <TitleNotFound />;
  }
  return render;
};

export default Selected;
