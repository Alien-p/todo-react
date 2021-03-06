import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({inputValue: e.target.value});
  }

  handleSubmit() {
    this.props.addTodo(this.state.inputValue);
    this.setState({inputValue: ''});
  }

  render() {
    return(
      <div>
        <input type='text' onChange={this.handleChange} value={this.state.inputValue}  />
        <button onClick={this.handleSubmit}>Add new todo</button>
      </div>
    )
  }
}

export default TodoForm;