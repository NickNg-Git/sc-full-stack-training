function Table(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>
            <table border={1}>
                <thead>
                    <tr><td>ID</td><td>USERID</td><td>TITLE</td><td>COMPLETED</td></tr>
                </thead>
                <tbody>
                    {props.data.map(todo=>(
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.userId}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ?"true":"false"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </p>
        </div>)
}
export default Table