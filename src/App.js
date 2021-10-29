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

  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }
}

export default App;
