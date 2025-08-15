import { useState } from 'react'
import './App.css'

function App() {

  type Todo = {
    todo: string,
    urgency: number,
    date: number,
    completed: false
  }

  type newTodo ={
    newTodo: string,
    newUrgency: number,
    newDate: number,
  }
  
  const [todo, setTodo] = useState<Todo[]>([])
  const [count, setCount] = useState<number>(0);

  const addTodo = (newItem: string, newUrgency: number, newDate: number ) => {
    console.log("addTodo hit");
 
  }

  return (
    <div>
   
        <h1>
          Typescript TODO
        </h1>
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <div>
        <button onClick={addTodo}>addtodo</button>
        </div>
    
    </div>
  )
}

export default App;
