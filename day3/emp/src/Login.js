import {useState} from 'react'
function Login(props){
 const [username,setUserName] = useState()
 const [password,setPassword] = useState()
 const [loginError,setLoginError] = useState({})
 const login = ()=>{
     if( username =="viswa" && password=="viswa"){
       props.setUser({username})
       setLoginError({})
     }else{
        setLoginError({message:"Invalid"})

     }
 }
    return(<div>
     <label>Enter username <input type="text" onChange={(e)=>setUserName(e.target.value)}/></label>
    <br/>
    <label>Enter password <input type="password" onChange={(e)=>setPassword(e.target.value)}/></label>
     <br/>
     <button onClick={login}>Login</button>
     {loginError.message ?(<div>{loginError.message}</div>):(<div></div>)}
    </div>)
}

export default Login