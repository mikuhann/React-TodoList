import React, { Component } from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };
  markDone = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };
  markImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };
  render() {
    const { todo } = this.props;
    const { done, important } = this.state;

    let classes = 'todo-list-item';
    if (done) {
      classes += ' done';
    }
    if (important) {
      classes += ' important';
    }
    return (
      <span className={classes}>
      <span className='todo-list-item-label'
            onClick={ this.markDone }>
        { todo }
      </span>
      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={ this.markImportant }>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
  };
}
