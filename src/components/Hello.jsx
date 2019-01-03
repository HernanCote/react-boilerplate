import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks
    };
  }

  renderFunction = tasks => {
    const task = [...tasks];
    return task.map(t => <h1 key={t}>{t}</h1>);
  };

  render() {
    return <div>{this.renderFunction(this.state.tasks)}</div>;
  }
}

Hello.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default Hello;
