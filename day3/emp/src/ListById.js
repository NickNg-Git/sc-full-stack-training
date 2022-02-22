import { useState } from 'react'
import axios from 'axios'
import Table from './Table'
function ListById(props) {

    const [emps, setEmps] = useState([])
    const [empId, setEmpId] = useState()
    const handleFetchId = () => {

        axios.get(`http://localhost:8080/getempbyid?empId=${empId}`)
            .then(response => response.data)
            .then(data => setEmps([data]))

    }
    const handleIdChange = (event) => {
        setEmpId(event.target.value)
    }
    if (props.user.username) {
        return (<div>
            <label>
                Enter empId <input type="number" onChange={handleIdChange} />
            </label>
            <button onClick={handleFetchId}>Fetch by empId</button>
            <Table emps={emps} />

        </div>)
    } else
        return (<div>Please sign in first</div>)

}

export default ListById