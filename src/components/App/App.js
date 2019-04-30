import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddTodoForm from '../AddTodoForm';

import './App.css';

export default class App extends Component {
  startId = 100;
  state = {
    todoData: [
      this.createTodo('Task 1'),
      this.createTodo('Task 2'),
      this.createTodo('Task 3')
    ]
  };

  createTodo(text) {
    return {
      todo: text,
      done: false,
      important: false,
      id: this.startId++
    }
  }

  deleteTodo = (id) => {
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
  addTodo = (text) => {
    const newTodo = this.createTodo(text);
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newTodo
      ];
      return {
        todoData: newArr
      }
    })
  };
  toggleProperty(arr, id, propertyName) {
    const elementIndex = arr.findIndex((item) => item.id === id);
    const oldItem = arr[elementIndex];
    const newItem = {
      ...oldItem,
      [propertyName]: !oldItem[propertyName]
    };
    return [
      ...arr.slice(0, elementIndex),
      newItem,
      ...arr.slice(elementIndex + 1)
    ];
  }
  markDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };
  markImportant= (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  };
  render() {
    const { todoData } = this.state;
    const doneCount = todoData
      .filter((item) => item.done).length;
    const todo = todoData.length - doneCount;
    return (
      <div className='todo-app'>
        <AppHeader todo={ todo } done={ doneCount } />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todoData = { todoData }
                  deleteItem = { this.deleteTodo }
                  markDone = { this.markDone }
                  markImportant = { this.markImportant }/>
        <AddTodoForm addTodo = { this.addTodo }/>
      </div>
    );
  };
};
