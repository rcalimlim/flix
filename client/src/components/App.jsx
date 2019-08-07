import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Welcome from './Welcome.jsx';
import Search from './Search.jsx';
import Results from './Results.jsx';
import Selected from './Selected.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentString: '',
      searchString: '',
      selectedTitle: {
        netflixid: '80171723',
        title: 'Chibi Maruko-chan Movie',
        image: 'https://occ-0-753-1007.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABdnBzcnZ47TiaAwjl60KrpIp9MVwEw7IICzZ0o1uqHbXT7AhUccJiO6BUA85uJ-hOBKshYVYNtsJDpY5PLxaagAp7I_xZOA.jpg?r=fb7',
        synopsis: 'Elementary schooler Momoko Sakura and her friends Ono and Sugiyama get into a variety of scrapes as they grow up together in the 1960s.',
        rating: '8.3',
        type: 'movie',
        released: '1990',
        runtime: '1h33m',
        largeimage: '',
        unogsdate: '2017-03-13',
        imdbid: 'tt0220204',
        download: '0',
      },
      matchedTitles: [],
      suggestedTitles: [
        {
          netflixid: '70068528',
          title: 'Death Note',
          image: 'https://occ-0-114-116.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABT6unLVAs0sGza48opjBrODGBYC0MYvlKSFQDZek5he9qUube6Jt6ZsVIuOyg2VMnbUX1VTSo3xWYlQiW4ALb9CHxnlKyfc.jpg?r=5dc',
          synopsis: 'When he finds he has the power to kill anyone by merely writing his or her name, a brilliant student develops a god complex and aims to create utopia.',
          rating: '9',
          type: 'movie',
          released: '2006',
          runtime: '2h6m',
          largeimage: '',
          unogsdate: '2018-11-02',
          imdbid: 'tt0877057',
          download: '0',
        },
        {
          netflixid: '70253593',
          title: 'Erased',
          image: 'https://occ-0-753-1007.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABfFuY4G7vlA8aF4AD8ifTuogHPoYw9w_DcGmmqpcoBcLLbCD7WrukyQE8NyXl7QjwS-8MGn-FY23D8Hj_UlXpXN7XwhveK0.jpg?r=d3b',
          synopsis: 'Aspiring manga artist Satoru inadvertently travels back through time, enabling him to prevent fatalities from occurring to people near him.',
          rating: '8.5',
          type: 'movie',
          released: '2016',
          runtime: '2h0m',
          largeimage: '',
          unogsdate: '2017-07-10',
          imdbid: 'tt5249462',
          download: '0',
        },
      ],
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
      console.log(currentString);
      this.setState({ searchString: currentString });
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
              searchString={searchString}
              handleChange={this.handleChange}
              handlePress={this.handlePress}
            />
          </Row>
          <Row>
            <Selected selectedTitle={selectedTitle} />
          </Row>
          <Row>
            <Results suggestedTitles={suggestedTitles} />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
