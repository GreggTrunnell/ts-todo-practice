import { useState } from "react";
import "./App.css";

function App() {
  type Todo = {
    todo: string;
    urgency: number;
    date: number;
    completed: false;
  };

  type NewTodo = Omit<Todo, "completed">;

  const [todo, setTodo] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<NewTodo[]>([]);

  const addTodo = (todo: NewTodo) => {
    console.log("addTodo hit");
  };

  return (
    <div>
      <h1>Typescript TODO</h1>
      <div>
        <input placeholder="Add a Task"></input>
      </div>
    </div>
  );
}

export default App;
