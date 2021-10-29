import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...': 'We ar ready'}</div>;
  }

  componentDidMount() {
    axios.get('https://yts-proxy.now.sh/list_movies.json');
  }
}

export default App;
