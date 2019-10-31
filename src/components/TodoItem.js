import React, { Component } from "react";
import { observer } from "mobx-react";
import todostore from "../stores/TodoStore";

@observer
class TodoItem extends Component {
  constructor(props){
    super(props)
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(){
    todostore.deleteTodo(this.props.todo.id);
  }

  onToggle = () => {
    this.props.todo.toggle();
  };

  render() {
    const { todo } = this.props;
    return (
      <div>
        <li className={todo.completed ? "completed" : " "}>
          <div className="view" className="disp">
            <input
              onChange={this.onToggle}
              type="checkbox"
              className="toggle"
              value="on"
              checked={todo.completed}
            />
            <label>{todo.title}</label>
            <button className="destroy" onClick={this.removeTodo}/>
            
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
