import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ todo, deleteItem, markDone, markImportant, done, important }) => {
    let classes = 'todo-list-item';
    if (done) {
      classes += ' done';
    }
    if (important) {
      classes += ' important';
    }
    return (
      <span className={ classes }>
      <span className='todo-list-item-label'
            onClick={ markDone }>
        { todo }
      </span>
      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={ markImportant }>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={ deleteItem }>
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
};

export default TodoListItem;
