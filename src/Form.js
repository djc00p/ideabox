import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
        />

        <input
          type='text'
          placeholder='Desciption'
          name='description'
          value={this.state.description}
        />

        <button>SUBMIT</button>
      </form>
    )
  }
}

export default Form;
