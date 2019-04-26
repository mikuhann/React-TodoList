import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ todo, important }) => {
  const importantStyle = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };
  return (
    <span className='todo-list-item'>
      <span className='todo-list-item-label'
            style={ importantStyle }>
        { todo }
      </span>
      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
};

export default TodoListItem;
