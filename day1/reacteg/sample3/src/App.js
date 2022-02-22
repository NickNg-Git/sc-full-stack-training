import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [todoId, setTodoId] = useState()
  const [todoData,setTodoData] =useState([])
  const [isDisabled,setIsDisabled] = useState(true)
  const captureToDoId = (event) => {
     let capturedId = event.target.value
     if(capturedId > 0 && capturedId <=100){
      setIsDisabled(false)
     }else{
      setIsDisabled (true)
     }
    setTodoId(event.target.value)
  }
  const fetchData = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then(response=>response.data)
    .then(data=>setTodoData(data))
  }
  let b 
  if(isDisabled){
  b =       <button  onClick={fetchData} disabled>Click to Fetch</button>

  }else{
   b= <button  onClick={fetchData}>Click to Fetch</button>

  }
  return (
    <div className="App">
      <label>Enter todo ID
        <input type="number" onChange={captureToDoId} min={0} max={100}/>
      </label>
      <br/>
      {b}
      <br/>
      Data fetched is {JSON.stringify(todoData)}
    </div>
  );
}

export default App;
