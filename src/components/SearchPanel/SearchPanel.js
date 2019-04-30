import React, { Component } from "react";

import './SearchPanel.css';

export default class SearchPanel extends Component {
  state = {
    search: ''
  };
  onSearch = (e) => {
    const search = e.target.value;
    this.setState({ search });
    this.props.onSearch(search);
  };
  render() {
    const { search } = this.state;
    return <input type="text"
                  placeholder='Type to search'
                  className='form-control search-input'
                  value={ search }
                  onChange={ this.onSearch }/>;
  }
};
