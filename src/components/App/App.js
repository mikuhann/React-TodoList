import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';

export default class App extends Component {
  state = {
    todoData: [
      { todo: 'Task 1', important: false, id: 1 },
      { todo: 'Task 2', important: false, id: 2 },
      { todo: 'Task 3', important: true, id: 3 },
    ]
  };
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const elementIndex = todoData.findIndex((item) => item.id === id);
      const newArr = [
        ...todoData.slice(0, elementIndex),
        ...todoData.slice(elementIndex + 1)
      ];
      return {
        todoData: newArr
      };
    });
  };
  render() {
    const { todoData } = this.state;
    return (
      <div className='todo-app'>
        <AppHeader todo={3} done={1} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todoData = { todoData }
                  deleteItem = { this.deleteItem }/>
      </div>
    );
  };
};
