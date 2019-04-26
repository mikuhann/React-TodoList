import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';

import './index.css';

const App = () => {
  const todoData = [
    { todo: 'Task 1', important: false, id: 1 },
    { todo: 'Task 2', important: false, id: 2 },
    { todo: 'Task 3', important: true, id: 3 },
  ];
  return (
    <div className='todo-app'>
      <AppHeader todo={3} done={1} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todoData = { todoData } />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
