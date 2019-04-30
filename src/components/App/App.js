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
    ],
    search: '',
    filter: 'all' // active,all,done
  };

  createTodo(text) {
    return {
      todo: text,
      done: false,
      important: false,
      id: this.startId++
    };
  };

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
      };
    });
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
  };
  markDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };
  markImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };
  searchTodos(arr, term) {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.todo.toLowerCase().indexOf(term.toLowerCase()) > -1);
  };
  onSearch = (search) => {
    this.setState({ search })
  };
  onFilterChange = (filter) => {
    this.setState({ filter })
  }
  filterItems(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items
    }
  }
  render() {
    const { todoData, search, filter } = this.state;
    const doneCount = todoData
      .filter((item) => item.done).length;
    const todo = todoData.length - doneCount;
    const visibleItems = this.filterItems(this.searchTodos(todoData, search), filter);
    return (
      <div className='todo-app'>
        <AppHeader todo={ todo } done={ doneCount } />
        <div className='top-panel d-flex'>
          <SearchPanel onSearch = { this.onSearch } />
          <ItemStatusFilter
            filter = { filter }
            onFilterChange = { this.onFilterChange }/>
        </div>
        <TodoList todoData = { visibleItems }
                  deleteItem = { this.deleteTodo }
                  markDone = { this.markDone }
                  markImportant = { this.markImportant }/>
        <AddTodoForm addTodo = { this.addTodo }/>
      </div>
    );
  };
};
