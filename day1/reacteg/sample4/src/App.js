
import './App.css';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import TodoById from './TodoById';
import TodoAll from './TodoAll';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/todoid" exact={true} element={<TodoById />}></Route>
          <Route path="/todoall" exact={true} element={<TodoAll />}></Route>
        </Routes>
        <Link to="/">Home</Link><br />
        <Link to="/todoall" >Fetch all</Link><br />
        <Link to="/todoid">Fetch by ID</Link><br />
      </BrowserRouter>

    </div>
  );
}

export default App;
