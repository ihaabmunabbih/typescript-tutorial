import React, { useState } from 'react';

import './App.css';
import InputField from './components/InputField';
import { Todo, TodoState } from './components/model';
import TodoList from './components/TodoList';



const App: React.FC = () => {
  const test = TodoState();
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo("");
    }
  }

  console.log(test);
  return ( 
    <div className="App">
      <span className="heading">
        TASKTIFY
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
