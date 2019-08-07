import React from 'react';
import Title from './Title.jsx';

const Results = ({ suggestedTitles }) => suggestedTitles.map(title => <Title title={title} />);

export default Results;
