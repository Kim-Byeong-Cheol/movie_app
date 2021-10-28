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
    //영화 데이터 로딩!
    
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }
}

export default App;
