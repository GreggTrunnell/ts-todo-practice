import { useState } from 'react'
import './App.css'

function App() {

  type Todo = {
    task: string,
    urgency: number,
    date: number,
    completed: false
  }

  const [todo, setTodo] = useState<Todo[]>([])
  const [count, setCount] = useState<number>(0);


  return (
    <div>
   
        <h1>
          Typescript TODO
        </h1>
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
    
    </div>
  )
}

export default App;
