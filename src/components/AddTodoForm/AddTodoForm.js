import React, {Component} from 'react';

import './AddTodoForm.css';

export default class AddTodoForm extends Component {
  state = {
    text: ''
  };
  onInputChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length) {
      this.props.addTodo(this.state.text);
      this.setState({
        text: ''
      });
    }
  };
  render() {
    const { text } = this.state;
    return (
      <form className='add-todo-form'
            onSubmit={ this.onSubmit }>
        <div className="form-group d-flex mt-3">
          <input type="text"
                 placeholder='Input your todo'
                 className='form-control mr-2'
                 onChange={ this.onInputChange }
                 value={ text } />
          <button className='btn btn-outline-secondary'>
            Add
          </button>
        </div>
      </form>
    );
  }
}
