import React, {Component} from 'react';

import './AddTodoForm.css';

export default class AddTodoForm extends Component {
  render() {
    const { addTodo } = this.props;
    return (
      <div className='add-todo-form'>
        <div className="form-group d-flex mt-3">
          <input type="text" placeholder='Input your todo' className='form-control mr-2'/>
          <button type='submit'
                  className='btn btn-outline-secondary'
                  onClick={ () => addTodo('Hello World')}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
