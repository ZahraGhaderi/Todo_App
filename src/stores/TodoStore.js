import { action, observable } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  @observable copyTodos = [];
  lastID = 0;

  @action
  addTodo(title) {
    this.todos = this.copyTodos;
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
    this.copyTodos = this.todos;
    this.copyTodos.forEach(todo => {});
  }

  @action
  deleteTodo = (todoID) => {
    this.copyTodos.remove(this.copyTodos[todoID]);
    this.lastID = this.lastID - 1;
    this.copyTodos.forEach(todo => {
      if(todo.id > todoID) {
        todo.id = todo.id -1
      }else if(todo.id < todoID){
        todo.id = todo.id
      }
    });
      this.todos = this.copyTodos
  }

  @action
  clearComplete = () => {
    for (let i = 0; i < this.copyTodos.length; i++) {
      if (this.copyTodos[i].completed === true) {
        this.copyTodos.remove(this.copyTodos[i]);
        this.copyTodos.forEach(todo => {
          if (todo.id > i) {
            todo.id = todo.id - 1;
          } else if (todo.id < i) {
            todo.id = todo.id;
          }
        });
        this.todos = this.copyTodos;
      }
    }
  };



  @action
  activeTodo = () => {
    this.todos = this.copyTodos.filter(todo => !todo.completed);
  };

  @action
  completeTodo = () => {
    this.todos = this.copyTodos.filter(todo => todo.completed);
  };

  @action
  showAllTodo = () => {
    this.todos = this.copyTodos.filter(todo => todo.completed !== "")
  };
}
const todostore = new TodoStore();
export default todostore;

