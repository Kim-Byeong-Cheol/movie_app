import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...': 'We ar ready'}</div>;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }
}

export default App;
