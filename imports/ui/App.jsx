import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

// App component - represents the whole app
class App extends Component {
  renderTasks() {
    console.log('here');
    console.log(this);
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default createContainer(() => {
  console.log('called');
  console.log(Tasks.find({}).fetch());
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};
