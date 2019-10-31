import React , {Component} from 'react';
import { observer } from 'mobx-react';
import todostore from './../stores/TodoStore';

@observer
class TodoFooter extends Component{
    render(){
        
        return(
            <div className="todo-footer">
            <span>
              {todostore.todos.filter(todo => todo.completed === false).length}
            </span>
            <label>item left</label>
            <button className="btn-footer Allbutton" onClick={todostore.showAllTodo}> All</button>
            <button className="btn-footer" onClick={todostore.activeTodo}>Active</button>
            <button className="btn-footer" onClick={todostore.completeTodo}>Completed</button>
            <button className="btn-footer" onClick={todostore.clearComplete}>ClearComplete</button> 
          </div>
        );
    }
}


export default TodoFooter;