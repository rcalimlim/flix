import React from 'react';
import TitleSelected from './TitleSelected.jsx';
import TitleNotFound from './TitleNotFound.jsx';

const Selected = ({ selectedTitle }) => {
  let render = <TitleSelected title={selectedTitle} />;
  if (selectedTitle.blank) {
    render = <></>;
  } else if (Object.keys(selectedTitle).length === 0) {
    render = <TitleNotFound />;
  }
  return render;
};

export default Selected;
