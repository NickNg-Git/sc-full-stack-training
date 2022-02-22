import { useState } from 'react'
import axios from 'axios';
import Table from './Table';

function ListAll(props) {
    const [emps, setEmps] = useState([])
    const handleFetchAll = () => {

        axios.get("http://localhost:8080/getallemp")
            .then(response => response.data)
            .then(data => setEmps(data))

    }
    if(props.user.username){
    return (<div>
        <button onClick={handleFetchAll}>Fetch all employees</button>
         <Table emps={emps}/>
    </div>)}
    else{
       return  (<div>Please sign in first</div>)
    }
}

export default ListAll
