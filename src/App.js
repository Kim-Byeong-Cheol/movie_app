import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello.');
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  }

  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  }

  render() {
    console.log("I'm render.");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
  
  componentDidMount() {
    console.log("I'm componentDidMount.");
  }

  componentDidUpdate() {
    console.log("I'm componentDidUpdate.");
  }
}

export default App;
