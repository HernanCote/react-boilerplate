import React, { Component } from 'react';
import Hello from './components/Hello';

class App extends Component {
  render() {
    const tasks = ['Welcome', 'To', 'React', 'Boilerplate'];
    return (
      <div>
        <h1>React Boilerplate</h1>
        <Hello tasks={tasks} />
      </div>
    );
  }
}

export default App;
