import React from "react";

import TodoListItem from '../TodoListItem';

import './TodoList.css';

const TodoList = ({ todoData, deleteItem }) => {
  const listItems = todoData.map((item) => {
    const { id, ...todoListData} = item;
    return (
      <li className='list-group-item'
        key={ id }>
        <TodoListItem { ...todoListData }
          deleteItem = {() => deleteItem(id)}
        />
      </li>
    );
  });
  return (
    <ul className='list-group todo-list'>
      { listItems }
    </ul>
  );
};
export default TodoList;
