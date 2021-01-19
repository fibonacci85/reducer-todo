import React, { useState } from "react";
import TodoCard from './components/TodoCard';

function App() {

  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState(["sample todo"])

  console.log(todoList)

  const newState = [...todoList, input]

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleAddTodoClick = (item) => {
    item.preventDefault();
    setTodoList(newState);
  }

  return (
    <div className="App">
      <form>
        <input type="text" value={input} onChange={handleChange} ></input>
        <button onClick={handleAddTodoClick}>add todo</button>
        <button>clear todo</button>
      </form>

      <TodoCard todoList={todoList} setTodoList={setTodoList} />
      
    </div>
  );
}

export default App;
