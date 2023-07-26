import React, { useState } from "react";
import "./App.css";
import { Todo } from "./model";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  };

  console.log(todo, todos);

  return (
    <DragDropContext
      onDragEnd={() => {
        //
      }}
    >
      <div className="App">
        <span className="heading">Todo App</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
