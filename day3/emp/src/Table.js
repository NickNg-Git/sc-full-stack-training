import React from "react"
function Table(props) {

    return (
        <table border={1}>
            <thead>
                <td>Emp id</td>
                <td>Name</td>
                <td>salary</td>
                <td>Age</td>
                <td>Dept name</td>
            </thead>
            <tbody>
                {props.emps.map(emp => (<tr>
                    <td>{emp.empId}</td>
                    <td>{emp.name}</td>
                    <td>{emp.salary}</td>
                    <td>{emp.age}</td>
                    <td>{emp.deptName}</td>


                </tr>))}
            </tbody>
        </table>

    )
}

export default Table
