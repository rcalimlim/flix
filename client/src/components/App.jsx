import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Welcome from './Welcome.jsx';
import Search from './Search.jsx';
import Results from './Results.jsx';
import Selected from './Selected.jsx';

const compareString = (comparate, compared) => {
  const regex = new RegExp(comparate, 'ig');
  const match = compared.match(regex);
  return match ? match[0].length / compared.length : 0;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      selectedTitle: { blank: true },
      suggestedTitles: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleChange(e) {
    this.setState({ currentString: e.target.value.toLowerCase() });
  }

  handlePress(e) {
    const { currentString } = this.state;
    if (e.key === 'Enter') {
      axios.get('http://localhost:3000/api/search/matching', { params: { title: currentString } })
        .then(response => response.data)
        .then((selected) => {
          const comparisons = selected
            .map(title => compareString(currentString, title.title));

          let match;
          if (comparisons.length !== 0) {
            match = comparisons
              .reduce((best, next) => (best > next ? best : next));
          }

          if (match > 0.4) {
            const index = comparisons.indexOf(match);
            this.setState({ selectedTitle: selected[index] });
          } else {
            this.setState({ selectedTitle: {} });
          }
        })
        .then(() => {
          const { selectedTitle } = this.state;
          if (Object.keys(selectedTitle).length > 0) {
            axios.get('http://localhost:3000/api/search/suggestions', { params: { title: selectedTitle.netflixid } })
              .then(response => response.data)
              .then(suggestions => this.setState({ suggestedTitles: suggestions }))
              .catch(console.error);
          }
        })
        .catch(console.error);
    }
  }

  render() {
    const {
      currentString,
      searchString,
      selectedTitle,
      suggestedTitles,
    } = this.state;

    return (
      <>
        <Welcome />
        <Container>
          <Row>
            <Search
              currentString={currentString}
              handleChange={this.handleChange}
              handlePress={this.handlePress}
            />
          </Row>
          <Row>
            <Selected selectedTitle={selectedTitle} />
          </Row>
          <Row>
            <Results
              selectedTitle={selectedTitle}
              suggestedTitles={suggestedTitles}
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
