import './App.css';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Login from './Login';
import Create from './Create';
import ListAll from './ListAll';
import ListById from './ListById';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
function App() {
  const navigate = useNavigate();
  const confirm = (e) => {
    e.preventDefault()
    setUser({})
    navigate('login/')
}
const [user,setUser] =useState({})

  return (
    <div className="App">
        <Routes>
          <Route path="/" exact={true} element={<Login user={user} setUser={setUser}/>}></Route>
          <Route path="/login" exact={true} element={<Login  user={user} setUser={setUser}/>}></Route>

          <Route path="/create" exact={true} element={<Create user={user} />}></Route>
          <Route path="/listall" exact={true} element={<ListAll user={user} />}></Route>
          <Route path="/listbyid" exact={true} element={<ListById user={user} />}></Route>

        </Routes>
        <Link to="/">Login</Link><br />
        <Link to="/create" >Create emp</Link><br />
        <Link to="/listall">Fetch All</Link><br />
        <Link to="/listbyid">Fetch by ID</Link><br />
        <Link  to="/#" onClick={confirm}>Logout</Link>
        <br/>


    </div>
  );
}

export default App;
