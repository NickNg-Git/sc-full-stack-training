import {useState} from 'react'
import axios from 'axios'
function Create(props) {

    const [data,setData] = useState({})
    const [response,setResponse] = useState({})

    const captureId = (e) =>{
      setData(Object.assign({},data,{empId:e.target.value}))
    }

    const captureName = (e) =>{
        setData(Object.assign({},data,{name:e.target.value}))

    }

    const captureAge = (e) =>{
        setData(Object.assign({},data,{age:e.target.value}))

    }

    const captureDeptName = (e) =>{
        setData(Object.assign({},data,{deptName:e.target.value}))

    }

    const captureSalary = (e) =>{
        setData(Object.assign({},data,{salary:e.target.value}))

    }

    const postData = (e)=>{
            e.preventDefault()
            axios.post('http://localhost:8080/addemp', data)
              .then(function (response) {
                setResponse(response);
              })
              .catch(function (error) {
                console.log(error);
              })
    }
    console.log('username'+props.user.username)
    if(props.user.username){
    return (<div>
        <form>
            <fieldset>
                <label>Enter id <input type="number" onChange={captureId} /></label><br/>
                <label>Enter salary <input type="number" onChange={captureSalary} /></label><br/>
                <label>Enter name <input type="text" onChange={captureName} /></label><br/>
                <label>Enter age <input type="number" onChange={captureAge} /></label><br/>
                <label>Enter dept name <input type="text" onChange={captureDeptName} /></label>
                <br/>
                <button onClick={postData}>Submit</button>
            </fieldset>
        </form>
        <br/>
        Response : {JSON.stringify(response)}


    </div>)
    }else{
       return (<div>Please sign in first</div>)
    }
}

export default Create