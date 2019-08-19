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

const entityMap = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#x2F;': '/',
};

const desanitize = string => String(string).replace(
  /&amp;|&lt;|&gt;|&quot;|&#39;|&#x2F;/g,
  s => entityMap[s],
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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
      this.setState({ loading: true });
      axios
        .get(
          'https://rosscalimlim.me/projects/quickflix/app/api/search/matching',
          { params: { title: currentString } },
        )
        .then(response => response.data)
        .then((selected) => {
          const comparisons = selected.map(title => compareString(currentString, title.title));

          let match;
          if (comparisons.length !== 0) {
            match = comparisons.reduce((best, next) => (best > next ? best : next));
          }

          if (match > 0.2) {
            const index = comparisons.indexOf(match);
            selected[index].title = desanitize(selected[index].title);
            selected[index].synopsis = desanitize(selected[index].synopsis);
            this.setState({ selectedTitle: selected[index] });
          } else {
            this.setState({
              loading: false,
              selectedTitle: {},
              suggestedTitles: [],
            });
          }
        })
        .then(() => {
          const { selectedTitle } = this.state;
          if (Object.keys(selectedTitle).length > 0) {
            axios
              .get(
                'https://rosscalimlim.me/projects/quickflix/app/api/search/suggestions',
                { params: { title: selectedTitle.netflixid } },
              )
              .then(response => response.data)
              .then(suggestions => suggestions.map((suggestion) => {
                suggestion.title = desanitize(suggestion.title);
                suggestion.synopsis = desanitize(suggestion.synopsis);
                return suggestion;
              }))
              .then(desanitized => this.setState({ suggestedTitles: desanitized }))
              .then(() => this.setState({ loading: false }))
              .catch(console.error);
          }
        })
        .catch(console.error);
    }
  }

  render() {
    const {
      currentString,
      loading,
      searchString,
      selectedTitle,
      suggestedTitles,
    } = this.state;

    return (
      <>
        <Welcome loading={loading} />
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
