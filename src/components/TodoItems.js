import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";
import todostore from "./../stores/TodoStore";
import TodoFooter from "./TodoFooter";

@observer
class TodoItems extends Component {

  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {todostore.todos.map(todo => {
            return <TodoItem todo={todo} key={todo.id}/>;
          })}
        </ul>
       <TodoFooter />
      </section>
    );
  }
}

export default TodoItems;
