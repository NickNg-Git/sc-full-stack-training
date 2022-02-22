import './App.css';

import { useState } from 'react'
import Table from './Table';
import axios from 'axios';
function App() {
  const [data, setData] = useState([])
  const [howfetching, setHowFetching] = useState()
  const fetchData = () => {
    setHowFetching('Normal Fetch')
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json))
  }
  const fetchDataAxios = () => {
    setHowFetching('Axios Fetch')

    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.data)
      .then(json => setData(json))
  }
  return (
    <div className="App">
      Fetching mechanism {howfetching}<br />
      <button onClick={fetchData}>Click to fetch data</button>
      <br />
      <button onClick={fetchDataAxios}>Click to fetch data using axios</button>
      <br />
      <Table name="Sample Table" data={data}></Table>
    </div>
  );
}

export default App;
