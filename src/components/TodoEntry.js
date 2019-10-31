import React, { Component } from "react";
import todostore from "./../stores/TodoStore";

class TodoEntry extends Component {
  state = {
    value: ""
  };

  handleKeyDown = event => {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    todostore.addTodo(this.state.value);
    this.setState({
      value: ""
    });
   
  };

    

  render() {
    return (
      <header className="header">
        <h1>todo</h1>
        <input
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
          onKeyDown={event => this.handleKeyDown(event)}
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          contentEditable="true"
        />
        
      </header>
    );
  }
}

export default TodoEntry;
